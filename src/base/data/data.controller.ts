import { Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller('data')
export class DataController {
    constructor(private connection: Connection) {}

    @Get("/:entityName/:id")
    async getRecord(@Param("entityName") entityName,@Param("id",new ParseIntPipe()) id){
        const records = await this.connection.getRepository(entityName).findByIds([id]);
        return records;
    }

    @Post("/:entityName")
    async createRecord(@Param("entityName") entityName,@Body() body){
        const records = await this.connection.getRepository(entityName).save(this.connection.getRepository(entityName).create(body))
        return records;
    }
}