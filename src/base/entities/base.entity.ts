import { User } from './user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true })
    active: boolean;

    @Column({ default: new Date() })
    createdAt: Date;

    @Column({ default: new Date() })
    updatedAt: Date;
}