import { DynamicModule, Module } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { SpotifyAsyncOptions, SpotifyOptions, SpotifyOptionsSymbol } from './interfaces/spotify-options.interface';
import { HttpModule } from '@nestjs/axios';

@Module({})
export class SpotifyModule {
  static forRoot(options: SpotifyOptions): DynamicModule {
    return {
      module: SpotifyModule,
      imports: [HttpModule],
      providers: [
        {
          provide: SpotifyOptionsSymbol,
          useValue: options,
        },
        SpotifyService
      ],
      exports: [SpotifyService],
      global: true,
    }
  }

  static forRootAsync(options: SpotifyAsyncOptions): DynamicModule {
    return {
      module: SpotifyModule,
      imports: [HttpModule, ...(options.imports ?? [])],
      providers: [
        {
          provide: SpotifyOptionsSymbol,
          useFactory: options.useFactory,
          inject: options.inject ?? []
        },
        SpotifyService
      ],
      exports: [SpotifyService],
      global: true,
    }
  }
}
