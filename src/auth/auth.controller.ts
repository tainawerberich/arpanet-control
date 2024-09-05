import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSerivce: AuthService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Body() createUser: UserDTO) {
    return this.authSerivce.validarUsuario(createUser.email, createUser.senha);
  }
}
