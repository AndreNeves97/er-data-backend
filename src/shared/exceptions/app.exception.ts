export class AppException extends Error {
  constructor(code: string, msg: string = '', info: any = null) {
    super(msg)

    this.code = code
    this.name = code

    if(msg)
      this.msg = msg
    
    if(info)
      this.info = info
  }

  name: string
  code: string
  msg?: string
  info?: any
}