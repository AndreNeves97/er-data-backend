import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Station } from './entities/station.entity';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(Station)
    private repository: Repository<Station>,
  ) {}


  create(createStationDto: CreateStationDto, user: User) {
    return this.repository.save({
      ...createStationDto,
      owner: user
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id, {
      relations: ['owner', 'variables', 'rule']
    });
  }

  async update(id: number, updateStationDto: UpdateStationDto) {
    return this.repository.save({
      id,
      ...updateStationDto
    });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}