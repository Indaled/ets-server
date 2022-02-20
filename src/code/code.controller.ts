import {Body, Controller, Get, Param} from '@nestjs/common';
import {CodeService} from "./code.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Code} from "./code.model";
import {CreateCodeDto} from "./dto/create-code.dto";


@Controller('code')
export class CodeController {
    constructor(private codeService: CodeService) {}

    @ApiOperation({summary: 'Получить аналоги'})
    @ApiResponse({status: 200, type: [Code]})
    @Get()
    getAll(@Body() codeDto: CreateCodeDto) {
        return this.codeService.getAll()
    }
    @ApiOperation({summary: 'Получить аналоги'})
    @ApiResponse({status: 200, type: [Code]})
    @Get(':s')
    search(@Param() params) {
        return this.codeService.searchCrossIdsLike(params.s)
    }
}

