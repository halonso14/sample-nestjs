import AppError from '../AppError';

export default class ApiConfigFileNotFoundError extends AppError {
  constructor(message: string) {
    super(message);
  }
}
