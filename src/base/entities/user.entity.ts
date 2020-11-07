import { Company } from './company.entity';
import { Group } from './group.entity';
import { Entity, Column, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
@Entity()
export class User extends BaseEntity {
    @Column()
    name: string;

    @ManyToMany(() => Group, (group: Group) => group.users)
    @JoinTable()
    groups: Group[];

    @ManyToOne(() => Company)
    company: Company
}