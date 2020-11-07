import { Company } from './company.entity';
import { Group } from './group.entity';
import { Entity, Column, ManyToOne, JoinTable, ManyToMany, BeforeUpdate, BeforeInsert } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IsEmail } from "class-validator";

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string;

    @Column()
    @IsEmail()
    email: string;


    @ManyToMany(() => Group, (group: Group) => group.users)
    @JoinTable()
    groups: Group[];

    @ManyToOne(() => Company)
    company: Company
}