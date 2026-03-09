import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '../../generated/prisma/client';

registerEnumType(UserRole, {
  name: 'UserRole',
})

@ObjectType({
  description: 'Модель пользователя'
})
export class UserModel implements User {
  @Field(() => ID)
  id: string;
  
  @Field(() => String, {
    nullable: true,
    defaultValue: 'John',
    description: 'Имя пользователя'
  })
  name: string;

  @Field(() => String, {
    nullable: false,
    description: 'Почта пользователя'
  })
  email: string;

  @Field(() => String, {
    nullable: false,
    description: 'Пароль пользователя'
  })
  password: string;

  @Field(() => String, {
    nullable: false,
    description: 'Роль пользователя'
  })
  role: UserRole;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}