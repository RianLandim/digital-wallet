import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGoalBody {
  @ApiProperty()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  limitDate?: Date;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  categoryId?: string;
}
