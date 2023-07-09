import { NestFactory } from '@nestjs/core';
import { UserBlogsModule } from './user-blogs.module';

async function bootstrap() {
  const app = await NestFactory.create(UserBlogsModule);
  await app.listen(3000);
}
bootstrap();
