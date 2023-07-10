import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UserBlog {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  date: string;

  @Prop()
  userId: string;
}

export const UserBlogSchema = SchemaFactory.createForClass(UserBlog);