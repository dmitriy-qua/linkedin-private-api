import { castArray, isArray, isPlainObject, mapValues, reduce } from 'lodash';
import { stringify } from 'querystring';

const encodeFilter = (value: string | string[], key: string) => encodeURIComponent(`${key}->${castArray(value).join('|')}`);

export const paramsSerializer = (params: Record<string, string | Record<string, string>>): string => {
  const encodedParams = mapValues(params, value => {
    if (!isArray(value) && !isPlainObject(value)) {
      return value.toString();
    }

    if (isArray(value)) {
      return `List(${value.join(',')})`;
    }

    const encodedList = reduce(
      value as Record<string, string>,
      (res, filterVal, filterKey) => `${res}${res ? ',' : ''}${encodeFilter(filterVal, filterKey)}`,
      '',
    );

    return `List(${encodedList})`;
  });

  return stringify(encodedParams, undefined, undefined, {
    encodeURIComponent: uri => uri,
  });
};

const getEncodedString = (res: string, filterVal: string, filterKey: string) => {
  return `${res}${res ? ',' : ''}${filterKey}:${filterVal}`;
};

export const graphqlParamsSerializer = (params: Record<string, string | Record<string, string>>): string => {
  const encodedParams = mapValues(params, value => {
    if (!isArray(value) && !isPlainObject(value)) {
      return value.toString();
    }

    if (isArray(value)) {
      return `List(${value.join(',')})`;
    }

    const encodedList = reduce(
      value as Record<string, string>,
      (res: string, filterVal: Record<string, string> | string, filterKey: string) => {
        if (filterKey === 'query') {
          const str = `(${reduce(filterVal as Record<string, string>, getEncodedString, '')})`;
          return getEncodedString(res, str as string, filterKey);
        }

        return getEncodedString(res, filterVal as string, filterKey);
      },
      '',
    );

    return `(${encodedList})`;
  });

  return stringify(encodedParams, '&&', undefined, {
    encodeURIComponent: uri => uri,
  });
};
