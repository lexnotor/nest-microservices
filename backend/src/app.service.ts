import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PostInfo } from 'src';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {
  constructor(@Inject('LOGGER_SERVICE') private readonly client: ClientProxy) {}

  addPost(payload: PostInfo) {
    const post: PostInfo = {
      author: payload.author || 'UNKWNOW',
      content: payload.content || 'EMPTY',
      id: randomUUID(),
      created_at: new Date().toISOString(),
      deleted_at: null,
      updated_at: new Date().toISOString(),
    };
    this.client.emit('post_created', post);
    return post;
  }
}
