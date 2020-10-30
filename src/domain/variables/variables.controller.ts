import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { VariablesService } from './variables.service';
import { CreateVariableDto } from './dto/create-variable.dto';
import { UpdateVariableDto } from './dto/update-variable.dto';

@Controller('variables')
export class VariablesController {
  constructor(private readonly variablesService: VariablesService) {}
  
  @Post()
  create(@Body() createVariableDto: CreateVariableDto) {
    return this.variablesService.create(createVariableDto);
  }

  @Get()
  findAll() {
    return this.variablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variablesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVariableDto: UpdateVariableDto) {
    this.variablesService.update(+id, updateVariableDto);
    return this.variablesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variablesService.remove(+id);
  }
}
