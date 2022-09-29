import { userModel } from './../../Models/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly Users: userModel[] = []

    create (user : userModel){
        this.Users.push(user)
    }
    
    getAll() : userModel[]{
        return this.Users
    }
    
    getByEmail(email : string) : userModel{
        return this.Users.find((user) => user.email === email)
    }
    
}

