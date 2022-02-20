import {ApiProperty} from "@nestjs/swagger";
import {Column, DataType, Index, Model, Table} from "sequelize-typescript";

interface CodeCreationAttribute {
    cross_id: number
    brand: string
    part_number: string
    name: string
}

@Table({
    tableName: 'crosses',
    indexes: [
        {
            unique: true,
            fields: ['brand', 'part_number']
        }
    ],
    createdAt: false,
    updatedAt: false,
    deletedAt: false
})
export class Code extends Model<Code, CodeCreationAttribute> {

    @ApiProperty({example: '1', description: 'Кросс номер аналога'})
    @Column({type: DataType.INTEGER, allowNull: false})
    cross_id: number;

    @Index
    @ApiProperty({example: 'Hitachi', description: 'Бренд'})
    @Column({type: DataType.STRING, allowNull: false })
    brand: string;

    @Index
    @ApiProperty({example: '42N-62-16980', description: 'Код запчасти'})
    @Column({type: DataType.STRING, allowNull: false})
    part_number: string;

    @ApiProperty({example: '42N6216980', description: 'Название запчасти'})
    @Column({type: DataType.STRING})
    name: string;

}
