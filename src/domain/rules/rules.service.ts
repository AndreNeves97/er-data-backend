import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Station } from '../stations/entities/station.entity';
import { Variable } from '../variables/entities/variable.entity';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { RuleVariable } from './entities/rule-variable.entity';
import { Rule } from './entities/rule.entity';

@Injectable()
export class RulesService {
  constructor(
    @InjectRepository(Rule)
    private repository: Repository<Rule>,

    @InjectRepository(RuleVariable)
    private ruleVariableRepository: Repository<RuleVariable>
  ) {}

  
  async create(createRuleDto: CreateRuleDto) {
    const obj = await this.repository.save(createRuleDto);
    await this.insertRulesVariables(obj.id, createRuleDto.rule_variables);
    return obj;
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateRuleDto: UpdateRuleDto) {
    const {name} = updateRuleDto;

    await this.repository.update(id, {name});

    if(!!updateRuleDto.rule_variables) {
      await this.removeRulesVariables(id);
      await this.insertRulesVariables(id, updateRuleDto.rule_variables); 
    }

    await this.repository.findOne(id);
  }


  async remove(id: number) {
    await this.removeRulesVariables(id);
    await this.repository.delete(id);
  }

  async insertRulesVariables(id, rule_variables: RuleVariable[]) {
    const promises = rule_variables
      .map(rule_variables => {
        rule_variables.rule = new Rule({id});
        return this.ruleVariableRepository.save(rule_variables);
      });
  
    return await Promise.all(promises);
  }

  async removeRulesVariables(id) {
    await this.ruleVariableRepository.delete({
      rule: new Rule({id})
    });
  }
}
