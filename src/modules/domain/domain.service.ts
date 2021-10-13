import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
    Domain,
    DomainDocument,
} from './domain.schema';

import {
    DomainCreateRequestDto,
    ItemListResponseDto,
    DomainUpdateRequestDto,
} from '../../common/dtos';
import { PaginationHeaderParser } from '../../common/helpers'


@Injectable()
export default class DomainService {
    constructor(@InjectModel(Domain.name) private readonly domainModel: Model<Domain>) { }

    public async create(createDto: DomainCreateRequestDto) {

        return this.domainModel.create(createDto);
    }

    // eslint-disable-next-line max-len
    public async getAll(paginationHeader: string): Promise<ItemListResponseDto<DomainDocument>> {
        const { page, limit, skip } = new PaginationHeaderParser(paginationHeader);

        const domains = await this.domainModel
            .find()
            .skip(skip)
            .limit(limit);

        const count = await this.domainModel.count();

        return new ItemListResponseDto<DomainDocument>(
            domains,
            count,
            page,
            limit,
        );
    }

    public async getByOwner(
        paginationHeader: string,
        ownerId: number,
    ): Promise<ItemListResponseDto<DomainDocument>> {
        const { page, limit, skip } = new PaginationHeaderParser(paginationHeader);

        const domains = await this.domainModel
            .find({
                ownerId,
            })
            .skip(skip)
            .limit(limit);

        const count = await this.domainModel.count({
            ownerId,
        });

        return new ItemListResponseDto<DomainDocument>(
            domains,
            count,
            page,
            limit,
        );
    }

    public async getBySearch(
        paginationHeader: string,
        queryText: string,
    ): Promise<ItemListResponseDto<DomainDocument>> {
        const { page, limit, skip } = new PaginationHeaderParser(paginationHeader);

        const domains = await this.domainModel
            .find({
                $text: {
                    $search: queryText,
                },
            })
            .skip(skip)
            .limit(limit);

        const count = await this.domainModel
            .count({
                $text: {
                    $search: queryText,
                },
            });

        return new ItemListResponseDto<DomainDocument>(
            domains,
            count,
            page,
            limit,
        );
    }

    public async update(
        id: string,
        updateDto: DomainUpdateRequestDto
    ): Promise<DomainDocument> {

        return this.domainModel.findByIdAndUpdate(id, updateDto, { new: true });
    }
}
