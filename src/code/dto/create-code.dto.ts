import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";

export class CreateCodeDto {

    @ApiProperty({example: 1, description: 'Кросс номер аналога'})
    @IsNumber({}, {message: 'Должны быть числом'})
    readonly cross_id: number;

    @ApiProperty({example: 'Hitachi', description: 'Бренд'})
    @IsString({message: 'Должно быть строкой'})
    @Length(2, 0,{message: 'Не меньше 2 символов'})
    readonly brand: string;

    @ApiProperty({example: '42N-62-16980', description: 'Код запчасти'})
    @IsString({message: 'Должно быть строкой'})
    @Length(2, 0,{message: 'Не меньше 2 символов'})
    readonly part_number: string;

    @ApiProperty({example: 'Штифт', description: 'Название запчасти'})
    @IsString({message: 'Должно быть строкой'})
    @Length(2, 0,{message: 'Не меньше 2 символов'})
    readonly name: string;
}
