import { Module } from '@nestjs/common';
import { CodeService } from './code.service';
import { CodeController } from './code.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Code} from "./code.model";

@Module({
  providers: [CodeService],
  controllers: [CodeController],
  imports: [
  SequelizeModule.forFeature([Code])
]
})
export class CodeModule {}
