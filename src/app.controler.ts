import { Controller, Get, Post, Body, Param, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ version: '3' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('56')
  @Get('/artists/:id')
  async getArtist(@Param('id') id: string) {
    return this.appService.getArtist(id);
  }

  @Get('/albums/:id')
  async getAlbums(@Param('id') id: string) {
    return this.appService.getAlbum(id);
  }
}