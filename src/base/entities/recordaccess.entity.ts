import { Entity } from './entity.entity';
import { Company } from './company.entity';
import { Group } from './group.entity';
import { Entity as EntityDecorator, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@EntityDecorator()
export class RecordAccess extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Entity)
    entity: Entity

    @Column()
    domain: string

    @Column()
    canCreate: boolean;

    @Column()
    canRead: boolean;

    @Column()
    canUpdate: boolean;

    @Column()
    canDelete: boolean;

    @ManyToMany(() => Group, (group: Group) => group.recordaccess)
    @JoinTable()
    groups: Group[];
}