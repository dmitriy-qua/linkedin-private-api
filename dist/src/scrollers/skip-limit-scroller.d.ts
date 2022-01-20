export declare abstract class SkipLimitScroller<T> {
    limit: number;
    skip: number;
    scrollNextCounter: number;
    hitEndOfResults: boolean;
    constructor({ skip, limit }: {
        skip: number;
        limit: number;
    });
    abstract fetch(): Promise<T[]>;
    scrollNext(): Promise<T[]>;
    scrollBack(): Promise<T[]>;
    restart(): void;
}
