import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class FindMonthBalanceBody {
  @ApiProperty()
  @IsNotEmpty()
  current: boolean;

  @ApiProperty()
  @IsOptional()
  day: Date;
}
