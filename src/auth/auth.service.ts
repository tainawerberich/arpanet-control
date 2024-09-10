import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async generateToken(user: User): Promise<string> {
    const payload = { sub: user.id, username: user.email };
    return this.jwtService.sign(payload);
  }

  async validarUsuario(email: string, senha: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { email: email },
    });
    if (!user) {
      return null;
    }
    const ehSenhaValida = await bcrypt.compare(senha, user.senha);
    if (ehSenhaValida) {
      return { token: await this.generateToken(user) };
    } else {
      return null;
    }
  }
  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }
}
