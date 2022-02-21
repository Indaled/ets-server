import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Code} from "./code.model";
import {Op, QueryTypes} from "sequelize";

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
        const cross_ids = await this.codeRepository.sequelize.query(`SELECT c.* FROM crosses AS c WHERE c.cross_id IN ( SELECT DISTINCT cc.cross_id FROM crosses AS cc WHERE cc.part_number LIKE :search_name )`,
            {
                model: Code,
                mapToModel: true,
                replacements: { search_name: `%${s}%` },
                type: QueryTypes.SELECT
            });
        return cross_ids
    }
}
