import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rule } from './entities/rule.entity';
import { RuleVariable } from './entities/rule-variable.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rule, RuleVariable])
  ],
  controllers: [RulesController],
  providers: [RulesService],
  exports: [RulesService]
})
export class RulesModule {}
