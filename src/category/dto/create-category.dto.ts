import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: '分类名称' })
  @IsNotEmpty({ message: '请输入分类名称' })
  @IsString()
  name: string;
}
