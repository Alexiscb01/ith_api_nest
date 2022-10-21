import { Sales } from './sales.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Details{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    product : string;

    @Column()
    quantity : number;

    @Column()
    unit_price : number;

    @ManyToOne(()=>Sales,(sale)=>sale.details)
    @JoinColumn({name : 'id_sale'})
    id_sales: number
}