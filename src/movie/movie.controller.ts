import { Body, Controller, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResponse } from './dto/movie.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMovieRequest } from './dto/create-movie.dto';

@ApiTags('Movie')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Получить список фильмов',
    description: 'Возвращает список со всеми фильмами'
  })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Фильмы найдены',
    type: [MovieResponse]
  })
  @Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'Fight Club'
      },
      {
        id: 2,
        title: 'Pulp Fiction'
      }
    ]
  }

  @ApiOperation({
    summary: 'Получить фильм по ID',
    description: 'Возвращает информацию о фильме'
  })
  @ApiOkResponse({ description: 'Фильм найден', type: MovieResponse })
  @ApiNotFoundResponse({
    description: 'Фильм не найден',
    example: {
      status: 404,
      message: 'Movie not found',
      timestamp: '2025-02-18',
      path: '/movie/123',
    }
  })
  @Get(':id')
  findById(@Param('id') id: string, @Query('year') year: number) {
    return {
        id,
        year
      }
  }

  @ApiOperation({ summary: 'Создать фильм' })
  @Post()
  create(@Body() dto: CreateMovieRequest) {
    return dto;
  }

}
