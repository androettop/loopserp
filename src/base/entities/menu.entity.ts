import { Company } from './company.entity';
import { Group } from './group.entity';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Menu extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(type => Menu, menu => menu.children)
    parent: Menu;
    
    @OneToMany(type => Menu, menu => menu.parent)
    children: Menu[];

    @ManyToMany(() => Group, (group: Group) => group.users)
    @JoinTable()
    groups: Group[];
}