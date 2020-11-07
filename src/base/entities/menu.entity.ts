import { Company } from './company.entity';
import { Group } from './group.entity';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Menu extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Menu)
    parent: Menu

    @ManyToMany(() => Group, (group: Group) => group.users)
    @JoinTable()
    groups: Group[];
}