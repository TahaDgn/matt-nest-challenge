export default class PaginationHeaderParser {
    constructor(header: string) {
        this.header = header;

        this.parse();
    }

    public header: string;

    public page = 1;

    public limit = 10;

    public skip = (this.page - 1) * this.limit;

    private parse(): void {
        if (!this.header) {
            return;
        }

        const filters = this.header.split('&');

        filters.forEach(filter => {
            const keyValue = filter.split('=');

            this.pageFilter(keyValue);

            this.limitFilter(keyValue);
        });

        this.skip = (this.page - 1) * this.limit;
    }

    private pageFilter(keyValue: any) {
        if (keyValue[0] === 'page') {

            this.page = Number(keyValue[1]);
        }
    }

    private limitFilter(keyValue: any) {
        if (keyValue[0] === 'limit') {

            this.limit = Number(keyValue[1]);
        }
    }
}
