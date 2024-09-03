import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { VendedorDTO } from './vendedor.dto';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createVendedor(@Body() createVendedorDTO: VendedorDTO) {
    return this.vendedorService.createVendedor(createVendedorDTO);
  }

  @Get(':id')
  async getVendedorById(@Param('id', ParseIntPipe) id: number) {
    return this.vendedorService.getVendedorById(id);
  }

  @Get()
  async getAllVendedores() {
    return this.vendedorService.getAllVendedores();
  }
}
