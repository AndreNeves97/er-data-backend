import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVariableDto } from './dto/create-variable.dto';
import { UpdateVariableDto } from './dto/update-variable.dto';
import { Variable } from './entities/variable.entity';

@Injectable()
export class VariablesService {
  constructor(
    @InjectRepository(Variable)
    private repository: Repository<Variable>,
  ) {}

  
  create(createVariableDto: CreateVariableDto) {
    return this.repository.save(createVariableDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateVariableDto: UpdateVariableDto) {
    this.repository.update(id, updateVariableDto);
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
