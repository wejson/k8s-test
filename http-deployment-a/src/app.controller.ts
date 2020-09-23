import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async tryToCommunicate(@Body('target') target: string = 'http://service-b:3000'): Promise<{ target: string, data: any }> {
    const { data } = await axios.get(target);
    console.log('data', data);
    return { target, data };
  }
}
