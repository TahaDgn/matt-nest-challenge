import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import MongooseExceptionFilter from './filters/mongoose-exception.filter';
import AppModule from './modules/app.module';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        errorHttpStatusCode: 422,
    }));

    app.useGlobalFilters(new MongooseExceptionFilter());

    await app.listen(5000);
}

bootstrap();
