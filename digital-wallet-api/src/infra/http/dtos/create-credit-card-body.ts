import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCreditCardBody {
  @ApiProperty()
  @IsNotEmpty()
  ownerName: string;

  @ApiProperty()
  @IsNotEmpty()
  flagId: string;

  @ApiProperty()
  @IsNotEmpty()
  bankId: string;

  @ApiProperty()
  @IsNotEmpty()
  closedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  expiratedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;
}
