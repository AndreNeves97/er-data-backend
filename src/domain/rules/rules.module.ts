import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rule } from './entities/rule.entity';
import { RuleVariable } from './entities/rule-variable';
import { Variable } from '../variables/entities/variable.entity';
import { VariablesModule } from '../variables/variables.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rule, RuleVariable])
  ],
  controllers: [RulesController],
  providers: [RulesService]
})
export class RulesModule {}
