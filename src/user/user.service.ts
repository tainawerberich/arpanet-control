import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './user.dto';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async createUser(createUserDto: UserDTO) {
    const hashedSenha = await bcrypt.hash(createUserDto.senha, 10);
    const user = await this.prisma.user.create({
      data: { ...createUserDto, senha: hashedSenha },
    });
    if (user) {
      return { success: true };
    } else {
      return { success: false, message: 'Usuário não foi criado' };
    }
  }

  // no login, eu busco do banco na tabela user o login e a senha passado do usuário, feito isso retorna o token se for válido o usuário se achou o usuário, retorna o token

  async createLogin() {}
}
