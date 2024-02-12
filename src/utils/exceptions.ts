export class BadRequest extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = "BadRequest";
    this.statusCode = 400;
  }
}

export class NotFound extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = "NotFound";
    this.statusCode = 404;
  }
}
