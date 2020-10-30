import { Module } from '@nestjs/common';
import { VariablesService } from './variables.service';
import { VariablesController } from './variables.controller';
import { Variable } from './entities/variable.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Variable])],
  controllers: [VariablesController],
  providers: [VariablesService]
})
export class VariablesModule {}
