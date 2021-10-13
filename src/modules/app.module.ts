import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ConfigService from './shared/config.service';
import DomainModule from './domain/domain.module';
import SharedModule from './shared/shared.module';


@Module({
    imports: [
        DomainModule,
        SharedModule,
        MongooseModule.forRootAsync({
            useFactory: (configService: ConfigService) => configService.mongooseConfig,
            inject: [ConfigService],
        }),
    ],
    controllers: [],
    providers: [],
})
export default class AppModule { }
