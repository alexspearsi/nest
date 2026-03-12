import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/artists/:id')
  async getArtist(@Param('id') id: string) {
    return this.appService.getArtist(id);
  }

  @Get('/albums/:id')
  async getAlbums(@Param('id') id: string) {
    return this.appService.getAlbum(id);
  }
}