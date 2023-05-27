import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryBody {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
