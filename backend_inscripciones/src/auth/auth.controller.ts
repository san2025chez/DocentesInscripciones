import { Controller, Get ,HttpStatus,Post,Response,Body} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags ,ApiCreatedResponse,ApiBody} from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { UserDto } from '../users/dto/userDto.dto';
import { RegistrationResponse } from './interfaces/registrationResponse.interface';

@Crud({
    model: {
        type: User,
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true,
        },
    },
})
@ApiTags('Auth')
@Controller('auth')
@Controller('api/auth')
export class AuthController {


    constructor(
      
        /*   private readonly customerService: CustomerService,
          private readonly sellerService: SellerService,*/
        private readonly service: UsersService,

    ) { }

    @Get()

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
        return users;

    }


    @Post('register')
    @ApiOperation({ summary: 'Registra una cuenta' })
    @ApiCreatedResponse({ description: 'The Account has been successfully created.', type: UserDto })
    @ApiResponse({ status: 400, description: "Bad Request" })
    @ApiResponse({ status: 403, description: "The logged user has no rights" })
    @ApiResponse({ status: 404, description: "'The resource was not found'" })
    @ApiResponse({ status: 409, description: "Conflict" })
    @ApiResponse({ status: 500, description: "internal server error" })
    @ApiBody({ type: UserDto })
    public async register(@Response() res, @Body() userDto: UserDto) {
        try {
          
            const user = await this.service.registerCliente(userDto);
            console.log("el user creado es",user);

                return res.status(HttpStatus.OK).json(userDto);
            
        } catch (err) {
            
            const response: RegistrationResponse = { success: false, message: err, user: null };
            return res.status(HttpStatus.OK).json(response);
        }
    }
}
