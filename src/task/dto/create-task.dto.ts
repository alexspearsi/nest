import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Length, Matches, MinLength } from 'class-validator';
import { StartsWith } from '../decorators/start-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home'
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 40)
  title: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Теги должны быть массивом' })
  @IsEnum(TaskTag, { each: true, message: 'Недопустимое значение тега' })
  @IsOptional()
  tags: TaskTag[];
}
