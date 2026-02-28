import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название задачи не может быть пустым' })
  @Length(2, 40, { message: 'Название должно быть от 2 до 40 символово' })
  title: string;

  @IsBoolean({ message: 'Статус должен быть булевым выражением' })
  isCompleted: boolean;
}