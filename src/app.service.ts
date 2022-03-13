import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
      console.log("哈哈哈")
    return 'Hello World!';
  }
}
