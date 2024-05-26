import { CommonResponse } from '@common/types';
import { Controller, Patch, UseInterceptors } from '@nestjs/common';
import TaskInterceptor from './task.interceptor';
import TaskService from './task.service';

@UseInterceptors(TaskInterceptor)
@Controller('/task')
export default class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Patch('/')
  async patchTask(): Promise<CommonResponse> {
    return this.taskService.patchTask();
  }
}
