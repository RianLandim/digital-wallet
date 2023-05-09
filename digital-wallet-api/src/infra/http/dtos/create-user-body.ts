import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty()
  @IsNotEmpty()
  earning: number;

  @ApiProperty()
  @IsNotEmpty()
  earningDay: number;
}
