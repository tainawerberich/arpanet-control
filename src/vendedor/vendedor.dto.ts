import { IsNotEmpty, IsString, Length } from 'class-validator';

export class VendedorDTO {
  @IsString({ message: 'O CPF deve ser uma string.' })
  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 caracteres.' })
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
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
