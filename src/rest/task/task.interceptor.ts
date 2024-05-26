import { ApiConfigFileNotFoundError } from '@errors/ConfigError';
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError } from 'rxjs';

@Injectable()
export default class TaskInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        switch (error.constructor) {
          case ApiConfigFileNotFoundError:
          default:
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }),
    );
  }
}
