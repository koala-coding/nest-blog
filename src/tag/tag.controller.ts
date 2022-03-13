import { TagService } from './tag.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';

@ApiTags('标签')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @ApiOperation({ summary: '创建标签' })
  @Post()
  create(@Body() body: CreateTagDto) {
    return this.tagService.create(body.name);
  }
}
