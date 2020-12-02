import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, NotFoundException } from '@nestjs/common';

import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = HttpStatus.NOT_FOUND;

    response.status(status).json({
      statusCode: status,
      message: `Cannot ${request.method} ${request.path}`,
      error: 'Not Found'
    });
    
  }
}
