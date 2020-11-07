import { Company } from './company.entity';
import { Group } from './group.entity';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class EntityAccess extends BaseEntity {
    @Column()
    name: string;

    @Column()
    canCreate: boolean;

    @Column()
    canRead: boolean;

    @Column()
    canUpdate: boolean;

    @Column()
    canDelete: boolean;

    @ManyToMany(() => Group, (group: Group) => group.entityaccess)
    @JoinTable()
    groups: Group[];
}