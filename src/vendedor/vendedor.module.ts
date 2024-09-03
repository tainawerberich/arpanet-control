import { Module } from '@nestjs/common';
import { VendedorController } from './vendedor.controller';
import { VendedorService } from './vendedor.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VendedorController],
  providers: [VendedorService],
})
export class VendedorModule {}
