"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlParamsSerializer = exports.paramsSerializer = void 0;
const lodash_1 = require("lodash");
const querystring_1 = require("querystring");
const encodeFilter = (value, key) => encodeURIComponent(`${key}->${lodash_1.castArray(value).join('|')}`);
exports.paramsSerializer = (params) => {
    const encodedParams = lodash_1.mapValues(params, value => {
        if (!lodash_1.isArray(value) && !lodash_1.isPlainObject(value)) {
            return value.toString();
        }
        if (lodash_1.isArray(value)) {
            return `List(${value.join(',')})`;
        }
        const encodedList = lodash_1.reduce(value, (res, filterVal, filterKey) => `${res}${res ? ',' : ''}${encodeFilter(filterVal, filterKey)}`, '');
        return `List(${encodedList})`;
    });
    return querystring_1.stringify(encodedParams, undefined, undefined, {
        encodeURIComponent: uri => uri,
    });
};
const getEncodedString = (res, filterVal, filterKey) => {
    return `${res}${res ? ',' : ''}${filterKey}:${filterVal}`;
};
exports.graphqlParamsSerializer = (params) => {
    const encodedParams = lodash_1.mapValues(params, value => {
        if (!lodash_1.isArray(value) && !lodash_1.isPlainObject(value)) {
            return value.toString();
        }
        if (lodash_1.isArray(value)) {
            return `List(${value.join(',')})`;
        }
        const encodedList = lodash_1.reduce(value, (res, filterVal, filterKey) => {
            if (filterKey === 'query') {
                const str = `(${lodash_1.reduce(filterVal, getEncodedString, '')})`;
                return getEncodedString(res, str, filterKey);
            }
            return getEncodedString(res, filterVal, filterKey);
        }, '');
        return `(${encodedList})`;
    });
    return querystring_1.stringify(encodedParams, '&&', undefined, {
        encodeURIComponent: uri => uri,
    });
};
//# sourceMappingURL=paramsSerializer.js.map