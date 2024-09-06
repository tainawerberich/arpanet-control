import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDTO } from './cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createProduto(@Body() clienteDTO: ClienteDTO) {
    return this.clienteService.createCliente(clienteDTO);
  }
}
