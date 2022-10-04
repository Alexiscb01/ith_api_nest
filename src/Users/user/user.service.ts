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
    
    updateUserbyID( id:number, user:userModel ):boolean{
        let user_index = this.Users.findIndex( (user) => user.id === id)
        const olduser = this.Users[user_index]

        if(user_index !== -1){
            this.Users[user_index] = {
                id: user.id,
                name: user.name,
                email: user.email,
                cellphone: user.cellphone,
                
            }

            this.checkOldUser(olduser,user_index)
            return true
        }
        return false
    }

    checkOldUser(olduser:userModel,user_index:number){
        if (this.Users[user_index].id === undefined) {
            this.Users[user_index].id = olduser.id
        }
        if (this.Users[user_index].name === undefined) {
            this.Users[user_index].name = olduser.name
        }
        if (this.Users[user_index].email === undefined) {
            this.Users[user_index].email = olduser.email
        }
        if (this.Users[user_index].cellphone === undefined) {
            this.Users[user_index].cellphone = olduser.cellphone
        }
    }
}

