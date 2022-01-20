export declare abstract class CreatedBeforeScroller<T> {
    createdBefore?: number;
    private prevCreatedBefore?;
    private pageIndexes;
    abstract fieldName: keyof T;
    constructor({ createdBefore }: {
        createdBefore?: Date;
    });
    abstract fetch(): Promise<T[]>;
    scrollNext(): Promise<T[]>;
    scrollBack(): Promise<T[]>;
    restart(): void;
}
