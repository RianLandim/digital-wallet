import { LaunchType } from '@application/entities/launch';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateLaunchBody {
  @ApiProperty()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(LaunchType)
  type: LaunchType;
}
