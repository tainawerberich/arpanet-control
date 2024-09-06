import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDTO } from './produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createProduto(@Body() createProdutoDTO: ProdutoDTO) {
    return this.produtoService.createProduto(createProdutoDTO);
  }
}
