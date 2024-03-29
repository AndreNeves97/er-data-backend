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
    return this.repository
      .createQueryBuilder('station')
      .where({id})
      .select([
        'station',
        'owner',
        'rule',
        'variables',
        'messages',
        'variables_data',
        'variable.id'
      ])
      .leftJoin('station.owner', 'owner')
      .leftJoin('station.rule', 'rule')
      .leftJoin('station.variables', 'variables')
      .leftJoin('station.messages', 'messages')
      .leftJoin('messages.variables_data', 'variables_data')
      .leftJoin('variables_data.variable', 'variable')
      .orderBy('messages.date')
      .getOne();
  }

  findOneWithRule(id: number) {
    return this.repository
      .createQueryBuilder('station')
      .where({id})
      .select([
        'station',
        'rule',
        'rule_variables',
        'variable'
      ])
      .leftJoin('station.rule', 'rule')
      .leftJoin('rule.rule_variables', 'rule_variables')
      .leftJoin('rule_variables.variable', 'variable')
      .getOne();
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

  async insertUserFavorited(id: number, user: User) {
    const station = await this.repository.findOneOrFail(id, {
      relations: ['users_favorited']
    });

    station.users_favorited.push(user);
    return this.repository.save(station);
  }

  async deleteUserFavorited(id: number, user: User) {
    const station = await this.repository.findOneOrFail(id, {
      relations: ['users_favorited']
    });

    station.users_favorited = station
      .users_favorited
      .filter(favorited_user => favorited_user.id !== user.id);

    return this.repository.save(station);
  }

  async findByFavoritedUser(user: User) {
    console.log(user)

    return this.repository
      .createQueryBuilder('station')
      .select([
        'station'
      ])
      .innerJoin('station.users_favorited', 'user', 'user.id = :id', {
        id: user.id
      })
      .getMany();
  }
}