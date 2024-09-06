import { IsNotEmpty, IsString, Length } from 'class-validator';

export class PagamentoDTO {
  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  tipo_pagamento: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  detalhes_pagamento: string;
}
