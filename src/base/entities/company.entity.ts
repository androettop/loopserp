import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Company extends BaseEntity {
    @Column()
    name: string;
}