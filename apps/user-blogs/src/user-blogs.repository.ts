import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { UserBlog } from './user-blogs.schema';
import {
    FilterQuery,
    Model,
    Types,
    UpdateQuery,
    SaveOptions,
    Connection,
} from 'mongoose';
import { UserBlogsDto } from './dto/user-blogs.dto';
@Injectable()
export class UserBlogRepository {
    protected readonly logger = new Logger(UserBlogRepository.name);

    constructor(
        @InjectModel(UserBlog.name) private userBlogModel: Model<UserBlog>,
    ) {
    }

    async create(userBlog: UserBlogsDto): Promise<any> {
        // create user using mongoose model
        const blog = new this.userBlogModel(userBlog);
        return blog.save();
    }

    async findOne(id: number): Promise<any> {
        // find user using mongoose model
        return this.userBlogModel.find({ userId: id });
    }

    async findAll(): Promise<any> {
        return this.userBlogModel.find({});
    }

}