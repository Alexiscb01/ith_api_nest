import { userModel } from './../../Models/user.model';
import { Body, Get, Controller, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { get } from 'http';

@Controller('/user')
export class UserController {
    constructor (private userService: UserService){
        
    }
    @Post()
    create(@Body() params: userModel):void{
        this.userService.create(params)
        /*console.log("Nombre es: " + params.name, "\nCorreo es: " + params.email,
        "n\Telefono es: " + params.cellphone)*/

    }
     @Get('/all')
     getUsers(): userModel[] {
        return this.userService.getAll()
     }
     @Get('/:id')
     getUser(@Param('email') params) : userModel{
        return this.userService.getByEmail(params.email)
     }
}
