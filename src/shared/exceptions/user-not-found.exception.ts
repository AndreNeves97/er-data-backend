import { AppException } from "./app.exception";

export class UserNotFoundException extends AppException {
  
  constructor() {
    super('user-not-found')
  }
  
}
