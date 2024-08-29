import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateVendedorDTO {
  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 9)
  telefone: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  tipo_vinculo: string;
}
