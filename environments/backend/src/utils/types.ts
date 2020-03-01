export class HttpError extends Error {
  status?: number

  constructor (params: HttpErrorParams) {
    super(params.message)
    this.message = params.message
    this.status = params.status
  }
}

export interface HttpErrorParams {
  message: string
  status?: number
}
