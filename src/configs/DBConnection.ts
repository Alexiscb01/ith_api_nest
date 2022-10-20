import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Sales } from "src/entities/sales.entity";

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ith-db',
    entities: [User, Sales],
    synchronize: true
})