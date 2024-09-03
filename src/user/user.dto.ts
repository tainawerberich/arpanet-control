import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsString()
  access_token: string;

  @IsNotEmpty()
  refresh_token: string;
}
