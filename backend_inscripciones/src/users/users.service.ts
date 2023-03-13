import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserDto } from './dto/userDto.dto';


@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo)
  }

  public getAllUsers = async (): Promise<any[]> => {
    /*  return await this.repo.find({ relations: ['seller', 'customer', 'rols'] }); */
    return await this.repo.find();

  }

  public async registerCliente(userDto: UserDto): Promise<UserDto> {

    console.log("entro a registrar", userDto);

    try {
      
      
     
     let  user = this.repo.create(userDto);
      console.log("el USER CREADO ES ",user);

      

      return await this.repo.save(user);
    } catch (error) {
      console.log('error: ', error);
    }
  }


  public async getUserById(id: string): Promise<any> {
  

    let user= await this.repo.findOne(id);

   
    return user;
}
}

