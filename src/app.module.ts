import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';

@Module({
  imports: [VendedorModule, PrismaModule, UserModule],
})
export class AppModule {}
