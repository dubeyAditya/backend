import { Test, TestingModule } from '@nestjs/testing';
import { UserBlogsController } from './user-blogs.controller';
import { UserBlogsService } from './user-blogs.service';

describe('UserBlogsController', () => {
  let userBlogsController: UserBlogsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserBlogsController],
      providers: [UserBlogsService],
    }).compile();

    userBlogsController = app.get<UserBlogsController>(UserBlogsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userBlogsController.getHello()).toBe('Hello World!');
    });
  });
});
