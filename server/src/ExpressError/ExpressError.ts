// interface ExpressErrorTypes {
//   message: string;
//   status: number;
// }

export class ExpressError extends Error {
  message: string;
  status: number; // adds the status property in class ExpressError
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}
