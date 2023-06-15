import { Injectable } from '@nestjs/common';
import { PostInfo } from 'src';

@Injectable()
export class AppService {
  sendMail(post: PostInfo) {
    console.log(post);
  }
}
