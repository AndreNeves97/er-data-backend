import { Controller, Get, Post, Req, HttpCode, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  @HttpCode(204)
  create(@Body() data) {
    console.log(data);
    return 'This action adds a new cat';
  }


  @Get('/medicoes')
  medicoes() {
    return [
      {hora: new Date(), variavel: 'aa', valor: 222},
      {hora: new Date(), variavel: 'aa', valor: 222},
      {hora: new Date(), variavel: 'aa', valor: 222},
      {hora: new Date(), variavel: 'aa', valor: 222},
      {hora: new Date(), variavel: 'aa', valor: 222}
    ]
  }
}
