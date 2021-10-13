import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
    Domain,
    DomainSchema,
} from './domain.schema';
import DomainService from './domain.service';
import DomainController from './domain.controller';


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Domain.name,
                schema: DomainSchema,
            },
        ]),
    ],
    controllers: [DomainController],
    providers: [DomainService],
})
export default class DomainModule { }
