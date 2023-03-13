import { Injectable } from '@nestjs/common';
// import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvData {
    // application
    APP_ENV: string;
    APP_DEBUG: boolean

    // database
    DB_TYPE: 'postgres';
    DB_HOST?: string;
    DB_NAME: string;
    DB_PORT?: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_ENTITIES: string;
    DB_MIGRATIONS_DIR: string;
    DB_MIGRATIONS: string;
    DB_SINCRONIZE: boolean;
    TOKEN: number;
}
export class EnvService {
    private vars: EnvData;

    constructor() {
        // const environment = process.env.NODE_ENV || 'development'
        let data: any;
        if (process.env.NODE_ENV === 'production') {
            data = dotenv.parse(fs.readFileSync(`${'production'}.env`));
        } else {
            data = dotenv.parse(fs.readFileSync(`${'development'}.env`));
        }
        //  data = dotenv.parse(fs.readFileSync(`${'porcentaje'}.env`))
        data.APP_ENV = process.env.NODE_ENV;
        data.APP_DEBUG = data.APP_DEBUG === 'true' ? true : false;
        // tslint:disable-next-line: radix
        data.DB_PORT = parseInt(data.DB_PORT);
     



        this.vars = data as EnvData;
    }

    read(): EnvData {
        return this.vars;
    }

    isDev(): boolean {
        return (this.vars.APP_ENV === 'development');
    }

    isProd(): boolean {
        return (this.vars.APP_ENV === 'production');
    }
}

