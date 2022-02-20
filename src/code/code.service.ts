import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Code} from "./code.model";
import {Op} from "sequelize";

@Injectable()
export class CodeService {
    constructor(@InjectModel(Code) private codeRepository: typeof Code) {}

    async getAll(limit = 25) {
        const codes = await this.codeRepository.findAll({ limit })
        return codes
    }

    async getCrossByIds(cross_ids: [Number]) {
        const crosses = await this.codeRepository.findAll({
        })
        return crosses
    }

    async searchCrossIds(s: string) {
        const cross_ids = await this.codeRepository.findAll({
            where: {
                part_number: s
            },
        })
        return cross_ids
    }
    async searchCrossIdsLike(s: string) {
        const cross_ids = await this.codeRepository.findAll({
            where: {
                part_number: {
                    [Op.like]: `%${s}%`
                }
            },
        })
        return cross_ids
    }
}
