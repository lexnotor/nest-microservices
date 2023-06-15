import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostInfo } from 'src';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addPost(@Body() payload: PostInfo) {
    return this.appService.addPost(payload);
  }
}
