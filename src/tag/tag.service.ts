import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  async create(name) {
    return await this.tagRepository.save({ name });
  }

  findByName() {}

  async findByIds(ids: string[]) {
    return this.tagRepository.findByIds(ids);
  }
}
