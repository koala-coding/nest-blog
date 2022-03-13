import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class WechatLoginDto {
  @ApiProperty({ description: '授权码' })
  @IsNotEmpty({ message: '请输入授权码' })
  code: string;
}
