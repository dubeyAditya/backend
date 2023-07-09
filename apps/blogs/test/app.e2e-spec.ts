import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserBlogsModule } from '../../user-blogs/src/user-blogs.module';

describe('Blogs App (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserBlogsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should return user posts', () => {
    return request(app.getHttpServer())
      .get('/api/posts')
      .expect(200)
      .expect((response) => {
        const posts = response.body;
        expect(posts).toBeDefined();
        expect(posts.length).toBeGreaterThan(0);
      });
  });
});
