import { CommonResponse } from '@common/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class TaskService {
  constructor() {}

  async patchTask(): Promise<CommonResponse> {
    return new Promise((resolve: (value: CommonResponse) => void) => {
      resolve({
        errorCode: 0,
        errorMessage: 'Success',
      });
    });
  }
}
