import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PostInfo } from 'src';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('post_created')
  EmitPost(post: PostInfo) {
    this.appService.sendMail(post);
  }
}
