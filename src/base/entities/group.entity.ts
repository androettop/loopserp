import { View } from './view.entity';
import { Menu } from './menu.entity';
import { User } from './user.entity';
import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { EntityAccess } from './entityaccess.entity';
@Entity()
export class Group extends BaseEntity {
    @Column()
    name: string;

    @ManyToMany(() => User, (user: User) => user.groups)
    users: User[];

    @ManyToMany(() => Menu, (menu: Menu) => menu.groups)
    menus: Menu[];

    @ManyToMany(() => View, (view: View) => view.groups)
    views: View[];

    @ManyToMany(() => EntityAccess, (entityaccess: EntityAccess) => entityaccess.groups)
    entityaccess: EntityAccess[];
}