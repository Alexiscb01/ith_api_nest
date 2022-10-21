import { Details } from './../../entities/details.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class DetailsService {
    constructor( @InjectRepository(Details) private detailsEntity : Repository< Details > ){
    }
    findalldetails(){
        return this.detailsEntity.find({
            relations:['id_sales']
        })
    }
}