import { Injectable } from '@nestjs/common';
import { Prisma, Produto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduto(data: Prisma.ProdutoCreateInput): Promise<Produto> {
    return this.prisma.produto.create({ data });
  }
}
