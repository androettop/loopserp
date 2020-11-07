import { Group } from './group.entity';
import { Entity, Column, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class View extends BaseEntity {
    @Column()
    name: string;

    @Column()
    arch: string;

    @ManyToMany(() => Group, (group: Group) => group.views)
    @JoinTable()
    groups: Group[];
}