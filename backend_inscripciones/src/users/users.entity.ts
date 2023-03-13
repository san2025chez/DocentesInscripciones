import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    ManyToMany,
    JoinTable,
    OneToMany,
  } from 'typeorm';
  import { IsOptional, IsEmail } from 'class-validator';
import { UserDto } from './dto/userDto.dto';

  
  
  // const { CREATE, UPDATE } = CrudValidationGroups;
  const enum tipoUsuario { customer = 'customer', seller = 'seller', admin = 'admin' }
  
  @Entity('USERS')
  export class User {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('varchar', { length: 300, nullable: true })
    dni: string;
    @Column('varchar', { length: 300, nullable: true })
    cuil: string;
    
    @Column('varchar', { length: 300, nullable: true })
    lastName: string;
    
    @IsOptional(/* { groups: [CREATE] } */)
    @Column('varchar', { length: 300, nullable: true })
    firstName: string;
    
    @Column({ type: Date, default: new Date, nullable: true })
    nacimiento: Date;

    @Column('varchar', { length: 300, nullable: true })
    email: string;

    @IsOptional(/* { groups: [CREATE] } */)
    @Column('varchar', { length: 300, nullable: true })
    situacion: string;

    @IsOptional(/* { groups: [CREATE] } */)
    @Column('varchar', { length: 300, nullable: true })
    nivel: string;
   
    toResponseObject(showToken: boolean = true): UserDto {
      const { email,firstName, lastName, dni,cuil,situacion,nivel,nacimiento
      } = this;
      const responseObject: UserDto = {
        email,
   
        firstName,
        lastName,
        dni,
        cuil,
        nacimiento,
        situacion,
        nivel
      
      };
  
      return responseObject;
    }
  }
  