import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [VendedorModule, PrismaModule, UserModule, AuthModule],
})
export class AppModule {}
