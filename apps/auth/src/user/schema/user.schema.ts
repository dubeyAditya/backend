import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema({ versionKey: false })
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  username: string;

  @Prop()
  profileImage: string;

  @Prop()
  userId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);