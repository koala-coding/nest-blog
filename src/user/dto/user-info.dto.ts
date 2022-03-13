import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserInfoDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: '用户昵称' })
  nickname: string;

  @ApiProperty({ description: '用户头像' })
  avatar: string;

  @ApiProperty({ description: '用户邮箱' })
  email: string;

  @ApiProperty({ description: '角色' })
  role: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;
}
