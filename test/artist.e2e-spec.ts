import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { ArtistDto } from '../src/artist/dto/artist.dto';

const dto: ArtistDto = {
  name: 'Post Malone',
  genre: 'Hip-Hop'
}

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe())

    await app.init();

    prisma = app.get(PrismaService);
  });

  afterAll(async () => {
    await prisma.artist.deleteMany();
    await app.close();
  })

  it('POST /artist - should create artist', async () => {
    const response = await request(app.getHttpServer())
      .post('/artist')
      .send(dto)
      .expect(201)

    expect(response.body).toMatchObject(dto);
    expect(response.body).toHaveProperty('id')
  })

  it('GET /artist/:id - should return 404 if artist not found', async () => {
    await request(app.getHttpServer())
      .get('/artist/not-existing-id')
      .expect(400)
  });

  it('GET /artist/:id - should return one artist by id', async () => {
    const created = await request(app.getHttpServer())
      .post('/artist')
      .send(dto)
      .expect(201);

    const artistId = created.body.id;

    const response = await request(app.getHttpServer())
      .get(`/artist/${artistId}`)
      .expect(200);

    expect(response.body).toMatchObject({
      id: artistId,
      name: dto.name,
      genre: dto.genre
    })
  })
});
