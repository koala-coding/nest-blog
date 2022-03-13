import { AuthModule } from './../auth/auth.module';
import { MDMiddleware } from './../core/middleware/md.middleware';
import { TagModule } from './../tag/tag.module';
import { CategoryModule } from './../category/category.module';
import { PostsEntity } from './posts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostsEntity]),
    CategoryModule,
    TagModule,
    AuthModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MDMiddleware)
      .forRoutes({ path: 'post', method: RequestMethod.POST });
  }
}
