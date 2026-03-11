import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistDto } from './dto/artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  async findAll() {
    return await this.artistService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.artistService.findOne(id);
  }

  @Post()
  async create(@Body() artistDto: ArtistDto) {
    return await this.artistService.create(artistDto);
  }
}
