import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';


@Injectable()
export default class ConfigService {
    constructor() {
        dotenv.config({ path: '.env' });
    }

    public get(key: string): string {

        return process.env[key];
    }

    public getNumber(key: string): number {

        return Number(this.get(key));
    }

    public get mongooseConfig(): MongooseModuleOptions {

        return {
            uri: process.env['DATABASE_URL'],
            retryAttempts: 5,
            retryDelay: 5000,
        };
    }
}
