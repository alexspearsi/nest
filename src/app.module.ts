import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ArtistModule } from './artist/artist.module';
import { AppController } from './app.controler';
import { AppService } from './app.service';
import { SpotifyModule } from './spotify/spotify.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ArtistModule,
    SpotifyModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}