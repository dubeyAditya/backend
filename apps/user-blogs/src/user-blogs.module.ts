import { Module } from '@nestjs/common';
import { UserBlogsController } from './user-blogs.controller';
import { UserBlogsService } from './user-blogs.service';

@Module({
  imports: [],
  controllers: [UserBlogsController],
  providers: [UserBlogsService],
})
export class UserBlogsModule {}
