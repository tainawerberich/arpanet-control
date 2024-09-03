import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [VendedorModule, PrismaModule],
})
export class AppModule {}
