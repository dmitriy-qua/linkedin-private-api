import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosProxyConfig } from 'axios';
declare type ConfigFullResponse = AxiosRequestConfig & {
    fullResponse?: true;
};
declare type ConfigNonFullResponse = AxiosRequestConfig & {
    fullResponse?: false;
};
interface RequestOpts {
    proxy?: AxiosProxyConfig;
}
export declare class Request {
    request: AxiosInstance;
    constructor({ proxy }?: RequestOpts);
    setHeaders(headers: Record<string, string>): void;
    get<T>(url: string, reqConfig?: ConfigNonFullResponse): Promise<T>;
    get<T>(url: string, reqConfig?: ConfigFullResponse): Promise<AxiosResponse<T>>;
    post<T>(url: string, data: string | Record<string, unknown>, reqConfig?: ConfigNonFullResponse): Promise<T>;
    post<T>(url: string, data: string | Record<string, unknown>, reqConfig?: ConfigFullResponse): Promise<AxiosResponse<T>>;
}
export {};
