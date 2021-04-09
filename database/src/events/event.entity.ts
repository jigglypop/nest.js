import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column()
    description: string;

    @Column({
        name: 'when_date'
    })
    when: Date;

    @Column()
    address: string;
}