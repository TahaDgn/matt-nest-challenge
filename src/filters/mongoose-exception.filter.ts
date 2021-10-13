import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
} from '@nestjs/common';
import { Response } from 'express';
import { MongoError } from 'mongoose/node_modules/mongodb';

@Catch(MongoError)
export default class MongooseExceptionFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();

        const response = ctx.getResponse<Response>();

        const { name, code, message } = exception;

        response
            .status(400)
            .json({
                name,
                code,
                message,
            });
    }
}
