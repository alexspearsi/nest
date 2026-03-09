import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { BaseModel } from '../common/models/base.model';
import { User, UserRole } from '../generated/prisma/client';
import { Field } from '@nestjs/graphql';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule extends BaseModel implements User {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => UserRole)
  role: UserRole;
}
