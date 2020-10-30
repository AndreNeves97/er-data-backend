import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from 'src/domain/users/users.service';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private readonly userService: UsersService) { }

  getRequest(context: ExecutionContext): Request {
    return context.switchToHttp().getRequest();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = this.getRequest(context);
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return true;
    }

    const user = await this.userService.findOneByFirebaseUid(authHeader);
    
    if(!user) {
      throw new UserNotFoundException();
    }

    req['user'] = user;
    
    return true;
  }
}
