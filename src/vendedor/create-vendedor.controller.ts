import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateVendedorService } from './create-vendedor.service';
import { CreateVendedorDTO } from './create-vendedor.dto';

@Controller('vendedor')
export class CreateVendedorController {
  constructor(private readonly vendedorService: CreateVendedorService) {}

  @Post()
  async createVendedor(@Body() createVendedorDTO: CreateVendedorDTO) {
    return this.vendedorService.createVendedor(createVendedorDTO);
  }

  @Get(':id')
  async getVendedorById(@Param('id', ParseIntPipe) id: number) {
    return this.vendedorService.getVendedorById(id);
  }
}
