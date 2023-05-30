import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGoalBody {
  @ApiProperty()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  limitDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  categoryId: string;
}
