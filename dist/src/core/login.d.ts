import { Client } from './client';
export declare class Login {
    private client;
    constructor({ client }: {
        client: Client;
    });
    private setRequestHeaders;
    private readCacheFile;
    private tryCacheLogin;
    userPass({ username, password, useCache, }: {
        username: string;
        password?: string;
        useCache?: boolean;
    }): Promise<Client>;
    userCookie({ username, cookies, useCache, }: {
        username?: string;
        cookies: {
            JSESSIONID: string;
            li_at?: string;
        };
        useCache?: boolean;
    }): Promise<Client>;
}
