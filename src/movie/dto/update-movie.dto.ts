import { PartialType } from '@nestjs/mapped-types';
import { MovieResponse } from './movie.dto';

export class UpdateMovieDto extends PartialType(MovieResponse) {}