import { compareSync } from 'bcryptjs';
import { User } from './entities/user.entity';
import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { WechatUserInfo } from '../auth/auth.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * 账号密码注册
   * @param createUser
   */
  async register(createUser: CreateUserDto) {
    const { username } = createUser;

    const user = await this.userRepository.findOne({
      where: { username },
    });
    if (user) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.userRepository.create(createUser);
    return await this.userRepository.save(newUser);
  }

  async registerByWechat(userInfo: WechatUserInfo) {
    const { nickname, openid, headimgurl } = userInfo;
    const newUser = await this.userRepository.create({
      nickname,
      openid,
      avatar: headimgurl,
    });
    return await this.userRepository.save(newUser);
  }

  //   async login(user: Partial<CreateUserDto>) {
  //     const { username, password } = user;

  //     const existUser = await this.userRepository
  //       .createQueryBuilder('user')
  //       .addSelect('user.password')
  //       .where('user.username=:username', { username })
  //       .getOne();

  //     console.log('existUser', existUser);
  //     if (
  //       !existUser ||
  //       !(await this.comparePassword(password, existUser.password))
  //     ) {
  //       throw new BadRequestException('用户名或者密码错误');
  //     }
  //     return existUser;
  //   }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    return await this.userRepository.findOne(id);
  }

  async findByOpenid(openid: string) {
    return await this.userRepository.findOne({ where: { openid } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  comparePassword(password, libPassword) {
    return compareSync(password, libPassword);
  }
}
