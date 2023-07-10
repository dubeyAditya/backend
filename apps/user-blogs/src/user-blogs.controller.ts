import { Controller, Post, Body } from '@nestjs/common';
import { UserBlogsService } from './user-blogs.service';
import { Blog } from './dto/create-blog.dto';
@Controller('user-blog')
export class UserBlogsController {
  constructor(private readonly userBlogsService: UserBlogsService) {}

  @Post()
  createBlog(@Body() blog: Blog): string {
    return this.userBlogsService.createBlog(blog);
  }
}
