import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoDTO } from './produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduto(data: ProdutoDTO): Promise<Produto> {
    return this.prisma.produto.create({ data });
  }
}
