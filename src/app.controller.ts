import { Controller, Get, Post, Put ,UploadedFile,UseInterceptors} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';


export const ApiFile =
  (fileName: string = 'file'): MethodDecorator =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          [fileName]: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    })(target, propertyKey, descriptor);
  };
@ApiTags("公共接口")
@Controller('app')

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

 
  @Post('upload')
  @ApiOperation({ summary: '上传文件' })
  @ApiConsumes('multipart/form-data')
  @ApiFile()
  @UseInterceptors( FileInterceptor('file'))
  async uploadFile(@UploadedFile('file') file: any): Promise<any> {
      console.log("0000", file)
  }
}

