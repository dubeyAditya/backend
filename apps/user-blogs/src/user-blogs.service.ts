import { Injectable } from '@nestjs/common';
import { UserBlogsDto } from './dto/user-blogs.dto';
import { UserBlogRepository } from './user-blogs.repository';
import { Blog } from './dto/create-blog.dto';

@Injectable()
export class UserBlogsService {

  constructor(private readonly userBlogsRepository: UserBlogRepository) {

  }

  createBlog(blog: Blog) {
    const userBlog: UserBlogsDto = {
      ...blog,
      date: new Date().toUTCString(),
      userId: '',
    }
    this.userBlogsRepository.create(userBlog);
    return '';
  }
}
