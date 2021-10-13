import { DomainModule } from './domain/domain.module';
import { Module } from '@nestjs/common';


@Module({
    imports: [DomainModule],
    controllers: [],
    providers: [],
})
export default class AppModule { }
