import { userModel } from './../../Models/user.model';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor (){
        
    }
    @Post()
    create(@Body() params: userModel):void{
        console.log("Nombre es: " + params.name, "\nCorreo es: " + params.email,
        "n\Telefono es: " + params.cellphone)

    }
}
