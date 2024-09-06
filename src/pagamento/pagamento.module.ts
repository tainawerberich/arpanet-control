import { Module } from '@nestjs/common';
import { PagamentoController } from './pagamento.controller';
import { PagamentoService } from './pagamento.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PagamentoController],
  providers: [PagamentoService],
})
export class PagamentoModule {}
