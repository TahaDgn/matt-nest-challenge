import {
    Controller,
    Post,
    Get,
    Put,
    Body,
    Headers,
    Param,
    Query,
} from '@nestjs/common';

import { DomainDocument } from './domain.schema';
import DomainService from './domain.service';

import {
    DomainCreateRequestDto,
    DomainUpdateRequestDto,
    ItemListResponseDto,
} from '../../common/dtos';



@Controller('/domains')
export default class DomainController {
    constructor(private readonly domainService: DomainService) { }

    @Post()
    // eslint-disable-next-line max-len
    public async create(@Body() createDto: DomainCreateRequestDto): Promise<DomainDocument> {

        return this.domainService.create(createDto);
    }

    @Get()
    public async getAll(@Headers('x-pagination') paginationHeader: string) {

        return this.domainService.getAll(paginationHeader);
    }

    @Get(':ownerId')
    public async getByOwner(
        @Headers('x-pagination') paginationHeader: string,
        @Param('ownerId') ownerId: number
    ): Promise<ItemListResponseDto<DomainDocument>> {

        return this.domainService.getByOwner(paginationHeader, ownerId);
    }

    @Post('/search')
    public async getBySearch(
        @Headers('x-pagination') paginationHeader: string,
        @Query('q') q: string,
    ): Promise<ItemListResponseDto<DomainDocument>> {

        return this.domainService.getBySearch(paginationHeader, q);
    }

    @Put(':domainId')
    public async update(
        @Param('domainId') id: string,
        @Body() updateDto: DomainUpdateRequestDto
    ): Promise<DomainDocument> {

        return this.domainService.update(id, updateDto);
    }
}
