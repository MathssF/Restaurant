import { IsString, IsInt } from 'class-validator';

export class CreateWaiterDto {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsInt()
  status: number;

  @IsString()
  enterCode: string;
}
