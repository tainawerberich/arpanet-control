import { Injectable } from '@nestjs/common';
import { Pagamentos } from '@prisma/client';
import { PagamentoDTO } from 'src/pagamento/pagamento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PagamentoService {
  constructor(private readonly prisma: PrismaService) {}

  async createPagamento(data: PagamentoDTO): Promise<Pagamentos> {
    return this.prisma.pagamentos.create({ data });
  }
}
