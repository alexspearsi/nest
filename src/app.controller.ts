import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from './prisma/prisma.service';

@ApiTags('App')
@Controller('users')
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly prismaService: PrismaService
  ) {}

  @Get()
  async findAll() {
    return await this.prismaService.user.create({
      data: {
        name: 'alex',
        email: 'check',
        password: 'lol'
      }
    })
  }
}
