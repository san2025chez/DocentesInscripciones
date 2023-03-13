import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dto/userDto.dto';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService  {
    constructor(private readonly usersService: UsersService){}


}
