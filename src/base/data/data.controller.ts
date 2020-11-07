import { Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller('data')
export class DataController {
    constructor(private connection: Connection) {}

    @Get("/:entityName/:id")
    async getRecord(@Param("entityName") entityName,@Param("id",new ParseIntPipe()) id){

        const users = await this.connection.getRepository(entityName).findByIds([id]);
        return users;
    }
}