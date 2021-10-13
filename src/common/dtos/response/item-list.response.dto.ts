export default class ItemListResponseDto<T>{
    constructor(
        results: T[],
        count: number,
        page: number,
        limit: number,
    ) {
        this.resuts = results;
        this.count = count;
        this.page = page;
        this.limit = limit;
    }

    resuts: T[];

    count: number;

    page: number;

    limit: number;
}
