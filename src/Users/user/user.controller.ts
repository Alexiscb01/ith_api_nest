import { userModel } from './../../Models/user.model';
import { Body, Get, Controller, Post, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { get } from 'http';

@Controller('user')
export class UserController {
    constructor (private userService: UserService){
        
    }
    @Post()
    create(@Body() params: userModel):void{
        this.userService.create(params)
        /*console.log("Nombre es: " + params.name, "\nCorreo es: " + params.email, "n\Telefono es: " + params.cellphone)*/

    }

     @Get('/all')
     getUsers(): userModel[] {
        return this.userService.getAll()
     }
     
     @Get('/:email')
     getUser(@Param('email') params) : userModel | string{
        const user = this.userService.getByEmail(params)
        return user ?? "El usuario no existe"
     }

     @Put('/update/:id')
    updateUser (@Body() user:userModel, @Param('id') id ){
        return this.userService.updateUserbyID(Number(id),user)
    }
}
//crear nueva rama -> git checkout -b *nombre de la rama*
//git add . && git commit -m *comentario*
// git commit -am *comentario* UNICAMENTE FUNCIONA CON ARCHIVOS QUE FUERON MODIFICADOS,
//NO AGREGADOS O ELIMINADOS
//Git push origin ValidarUsuario NO SE MANDA A MAIN
//git checkout main
//git pull origin main
//git status *te dice el status de tu main, si está desactualizado y cuantos commits atrás
