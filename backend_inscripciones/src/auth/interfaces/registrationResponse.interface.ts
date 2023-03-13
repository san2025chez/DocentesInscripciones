import { UserDto } from "../../users/dto/userDto.dto";


export interface RegistrationResponse {
    success: boolean;
    message: string;

    user: UserDto;

}