import { Injectable } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteDTO } from './cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  async createCliente(data: ClienteDTO): Promise<Cliente> {
    return this.prisma.cliente.create({ data });
  }
}
