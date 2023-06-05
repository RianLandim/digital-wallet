import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGoalBody {
  @ApiProperty()
  @IsOptional()
  value: number;

  @ApiProperty()
  @IsOptional()
  limitDate: Date;

  @ApiProperty()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsOptional()
  userId: string;

  @ApiProperty()
  @IsOptional()
  categoryId: string;

  @ApiProperty()
  @IsOptional()
  balance: number;
}
