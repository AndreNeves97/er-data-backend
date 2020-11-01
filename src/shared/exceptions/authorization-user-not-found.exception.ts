import { BadRequestException, NotFoundException } from "@nestjs/common";

export class AuthorizationUserNotFoundException extends NotFoundException {
  constructor() {
    super({
      status: 404,
      message: 'Authorization user not found'
    })
  }
}
