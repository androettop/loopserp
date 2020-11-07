import { Group } from './group.entity';
import { Entity, Column, ManyToOne, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class View extends BaseEntity {
    @Column()
    name: string;

    @Column()
    arch: string;

    @ManyToOne(type => View, view => view.children)
    parent: View;
    
    @OneToMany(type => View, view => view.parent)
    children: View[];

    @ManyToMany(() => Group, (group: Group) => group.views)
    @JoinTable()
    groups: Group[];
}