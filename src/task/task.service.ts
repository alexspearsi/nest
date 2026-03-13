import { Injectable  } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { CustomLogger } from '../common/logger/logger.service';

@Injectable()
export class TaskService {
  // private readonly logger = new Logger(TaskService.name);
  constructor(private readonly loggerService: CustomLogger) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.loggerService.log('CRON задача выполняется каждые 5 секунд', TaskService.name);
  }

  @Interval(1000)
  handleInterval() {
    this.loggerService.log('Interval задача каждую секунда', TaskService.name);
  }

  @Timeout(5000)
  handleTimeout() {
    this.loggerService.log('Timeout задача через 5 секунд после старта', TaskService.name);
  }
}
