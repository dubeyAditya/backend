import { NestFactory } from '@nestjs/core';
import { UserBlogsModule } from './user-blogs.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(UserBlogsModule);
  const configservice = app.get(ConfigService)
  await app.listen(configservice.get("PORT"));
}
bootstrap();
