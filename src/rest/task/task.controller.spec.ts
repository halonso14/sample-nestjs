import TaskController from './task.controller';
import TaskService from './task.service';

describe('Test TaskController', () => {
  let taskController: TaskController;
  let taskService: TaskService;

  beforeEach(() => {
    taskService = new TaskService();
    taskController = new TaskController(taskService);
  });

  describe('Test PATCH /task API', () => {
    it('returns expected errorCode 0', async () => {
      const ExpectedResult = {
        errorCode: 0,
        errorMessage: 'Success',
      };

      expect(await taskController.patchTask()).toStrictEqual(ExpectedResult);
    });
  });
});
