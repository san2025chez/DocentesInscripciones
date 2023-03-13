import { Controller, Get, Param } from '@nestjs/common';
import { Injectable, HttpException, HttpStatus, Inject, forwardRef,Response } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserDto } from './dto/userDto.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';
@Crud({
    model: {
        type: User,
    },
    routes: {
        createOneBase: {
            decorators: [ApiBody({ type: UserDto })]
        }
    },
 

  
})
@ApiTags('Users')
@Controller('users')
export class UsersController {
  

        constructor(public service: UsersService,
        ) { };
   
        
    
        @Get('list/users')

        //@UseGuards(AuthGuard('jwt'))
        @ApiResponse({ status: 200, description: 'data returned correctly' })
        @ApiResponse({ status: 403, description: 'Forbidden.' })
        @ApiResponse({ status: 400, description: "Bad Request" })
        @ApiResponse({ status: 404, description: "'The resource was not found'" })
        @ApiResponse({ status: 409, description: "Conflict" })
        @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    
        public async getUsers(@Response() res): Promise<any> {
            console.log('get a users');
            const users = await this.service.getAllUsers();
            return res.status(HttpStatus.OK).json(users);
    
        }

        @Get('/:userId')
        @ApiOperation({ summary: 'Obtiene un usuario por su Id' })
        @ApiResponse({ status: 200, description: 'Los datos han sido devueltos correctamente.' })
        @ApiResponse({ status: 403, description: 'Forbidden.' })
        @ApiResponse({ status: 500, description: 'Internal Server Error.' })
        public async getCommerce(@Response() res, @Param() param): Promise<any> {
            const user = await this.service.getUserById(param.userId);
            return res.status(HttpStatus.OK).json(user);
        }
    
      
}
