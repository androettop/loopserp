import { Company } from './company.entity';
import { Group } from './group.entity';
import { Entity as EntityDecorator, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@EntityDecorator()
export class Entity extends BaseEntity {
    @Column()
    name: string;
}