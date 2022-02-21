import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {SequelizeModule} from "@nestjs/sequelize";
import { CodeModule } from './code/code.module';
import {Code} from "./code/code.model";
import * as path from "path";
import {ServeStaticModule} from "@nestjs/serve-static";


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', 'static')
    }),
    ConfigModule.forRoot({
      envFilePath: `./config/${process.env.NODE_ENV}/.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DB,
      models: [Code],
      autoLoadModels: true
    }),
    CodeModule
  ],
})
export class AppModule {}

