import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { VendedorModule } from './vendedor/vendedor.module';

@Module({
  imports: [VendedorModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
