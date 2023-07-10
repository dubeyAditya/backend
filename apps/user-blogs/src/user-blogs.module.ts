import { Module } from '@nestjs/common';
import { UserBlogsController } from './user-blogs.controller';
import { UserBlogsService } from './user-blogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserBlog, UserBlogSchema } from './user-blogs.schema';
import { DatabaseModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { UserBlogRepository } from './user-blogs.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/user-blogs/.env',
    }),
    MongooseModule.forFeature([{ name: UserBlog.name, schema: UserBlogSchema }]),
    DatabaseModule
  ],
  controllers: [UserBlogsController],
  providers: [UserBlogsService, UserBlogRepository],
})
export class UserBlogsModule {}
