import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsOptional, Length } from 'class-validator';



export class UserDto {

  readonly id?: string;

  @ApiProperty({ description: 'Password del Usuario' })
  @IsOptional()
  readonly dni: string;

  @ApiProperty({ description: 'Email' })
  @IsOptional()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: 'Nombres del usuario' })
  @IsString()
  @IsOptional()
  //  @Length(3, 20, { message: 'the name between 3-20 caracteres' })
  readonly firstName: string;

  @ApiProperty({ description: 'Nombres del usuario' })
  @IsString()
  @IsOptional()
  readonly lastName: string;

  @ApiProperty({ description: 'Nombres del usuario' })
  @IsString()
  @IsOptional()
  readonly cuil: string;

  @ApiProperty({ description: 'Nombres del usuario' })
  @IsString()
  @IsOptional()
  readonly situacion: string;

  @ApiProperty({ description: 'Nombres del usuario' })
  @IsString()
  @IsOptional()
  readonly nivel: string;


@ApiProperty({ required: true, description: 'PROVINCIA' })
@IsOptional()

nacimiento: Date;
}
