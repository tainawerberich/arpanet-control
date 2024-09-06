import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PagamentoDTO } from './pagamento.dto';
import { PagamentoService } from './pagamento.service';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createPagamento(@Body() pagamentoDTO: PagamentoDTO) {
    return this.pagamentoService.createPagamento(pagamentoDTO);
  }
}
