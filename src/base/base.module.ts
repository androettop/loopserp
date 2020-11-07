import { RecordAccess } from './entities/recordaccess.entity';
import { Entity } from './entities/entity.entity';
import { View } from './entities/view.entity';
import { Menu } from './entities/menu.entity';
import { Group } from './entities/group.entity';
import { Company } from './entities/company.entity';
import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './data/data.controller';
import { EntityAccess } from './entities/entityaccess.entity';

@Module({
    controllers: [DataController],
    providers: [],
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'tad',
        password: 'tad',
        database: 'loopserp',
        entities: [User, Company, Group, Menu, View, EntityAccess, Entity, RecordAccess],
        autoLoadEntities: true,
        synchronize: true,
    })]
})
export class BaseModule { }
