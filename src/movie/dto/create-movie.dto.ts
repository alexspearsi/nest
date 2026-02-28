import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieRequest {
  @ApiProperty({
    description: 'Название фильма',
    example: 'Fight Club',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Год релиза',
    example: 1999,
    type: Number
  })
  releaseYear: number;

  @ApiPropertyOptional({
    description: 'Ссылка на постер фильма',
    example: 'https://storage.example.com/posters/123456.jpg',
    type: String,
  })
  poster?: string;

  @ApiProperty({
    description: 'ID актеров',
    example: ['123456', '6789'],
    type: [String]
  })
  actorIds: string[];
}