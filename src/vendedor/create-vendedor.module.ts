import { Module } from '@nestjs/common';
import { CreateVendedorController } from './create-vendedor.controller';
import { CreateVendedorService } from './create-vendedor.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CreateVendedorController],
  providers: [CreateVendedorService],
})
export class CreateVendedorModule {}
