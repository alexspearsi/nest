import { ApiProperty } from '@nestjs/swagger';

export class MovieResponse {
  @ApiProperty({
    description: 'ID фильма',
    example: '123456',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'title фильма',
    example: "Fight Club",
    type: String,
  })
  title: string;
}




// import { IsArray, IsInt, IsNotEmpty, IsString, IsUUID, Max, Min } from 'class-validator';

// export class MovieDto {
//   @IsNotEmpty()
//   @IsString()
//   title: string;

//   @IsNotEmpty()
//   @IsInt()
//   @Min(1888)
//   @Max(new Date().getFullYear())
//   releaseYear: number;

//   @IsString()
//   imageUrl: string;

//   @IsArray()
//   @IsUUID('4', { each: true })
//   actorIds: string[];
// }