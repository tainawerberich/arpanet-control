import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class ProdutoDTO {
  @IsString({ message: 'O CPF deve ser uma string.' })
  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 caracteres.' })
  tipo: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @Length(1, 45)
  rocha: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  tamanho: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 9)
  acabamento: string;

  @IsInt()
  @IsNotEmpty()
  @Length(1, 45)
  quantidade_estoque: number;

  @IsInt()
  @IsNotEmpty()
  @Length(1, 45)
  espessura: number;
}
