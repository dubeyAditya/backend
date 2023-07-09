import { Controller, Get } from '@nestjs/common';
import { UserBlogsService } from './user-blogs.service';

@Controller()
export class UserBlogsController {
  constructor(private readonly userBlogsService: UserBlogsService) {}

  @Get()
  getHello(): string {
    return this.userBlogsService.getHello();
  }
}
