import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { Rule } from './entities/rule.entity';

@Injectable()
export class RulesService {
  constructor(
    @InjectRepository(Rule)
    private repository: Repository<Rule>,
  ) {}

  
  create(createRuleDto: CreateRuleDto) {
    return this.repository.save(createRuleDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateRuleDto: UpdateRuleDto) {
    this.repository.update(id, updateRuleDto);
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
