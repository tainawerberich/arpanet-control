import { Injectable } from '@nestjs/common';
import { Prisma, Vendedor } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreateVendedorService {
  constructor(private readonly prisma: PrismaService) {}

  async createVendedor(data: Prisma.VendedorCreateInput): Promise<Vendedor> {
    return this.prisma.vendedor.create({ data });
  }

  async getVendedorById(id: number): Promise<Vendedor> {
    const vendedor = await this.prisma.vendedor.findUnique({
      where: { id },
    });
    return vendedor;
  }
}