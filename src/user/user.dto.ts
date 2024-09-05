import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;
}
