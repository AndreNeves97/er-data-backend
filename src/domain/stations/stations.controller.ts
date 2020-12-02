import { Controller, Get, Post, Body, Put, Param, Delete, Req, ForbiddenException } from '@nestjs/common';
import { StationsService } from './stations.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Request } from 'express';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}
  
  @Post()
  async create(@Body() createStationDto: CreateStationDto, @Req() request: Request) {
    const user = request['user'];

    if(!user) {
      throw new ForbiddenException();
    }

    const obj = await this.stationsService.create(createStationDto, user);
    return this.stationsService.findOne(obj.id);
  }

  @Get()
  findAll() {
    return this.stationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stationsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStationDto: UpdateStationDto) {
    await this.stationsService.update(+id, updateStationDto);
    return this.stationsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stationsService.remove(+id);
  }
  
  @Post(':id/favorite')
  async insertFavorite(@Param('id') id: string, @Req() request: Request) {
    const user = request['user'];

    if(!user) {
      throw new ForbiddenException();
    }

    return this.stationsService.insertUserFavorited(+id, user);
  }
}
