import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class ClienteDTO {
  @IsString({ message: 'O CNPJ deve ser uma string.' })
  @Length(11, 11, { message: 'O CNPJ deve ter exatamente 14 caracteres.' })
  cnpj: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @Length(1, 45)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  telefone: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 9)
  representante: string;

  @IsInt()
  @IsNotEmpty()
  @Length(1, 45)
  id_endereco: number;

  @IsInt()
  @IsNotEmpty()
  @Length(1, 45)
  user_id: number;
}
