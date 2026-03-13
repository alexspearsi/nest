import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CustomLogger } from '../common/logger/logger.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [TaskService, CustomLogger],
})
export class TaskModule {}
