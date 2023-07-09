import { Injectable } from '@nestjs/common';

@Injectable()
export class UserBlogsService {
  getHello(): string {
    return 'Hello World!';
  }
}
