import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCreditCardBody {
  @ApiProperty()
  @IsNotEmpty()
  ownerName: string;

  @ApiProperty()
  @IsNotEmpty()
  flag: string;

  @ApiProperty()
  @IsNotEmpty()
  bank: string;

  @ApiProperty()
  @IsNotEmpty()
  digits: string;

  @ApiProperty()
  @IsNotEmpty()
  closedAt: string;

  @ApiProperty()
  @IsNotEmpty()
  expiratedAt: string;
}
