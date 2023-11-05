import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    // @CreateDateColumn({
    //     type: 'timestamp without time zone',
    //     default: () => "timezone(UTC::text, now()"
    // })
    // public createdAt: Date;

    // @UpdateDateColumn({
    //     type: 'timestamp without time zone',
    //     default: () => "timezone(UTC::text, now()"
    // })
    // public updatedAt: Date;
}
