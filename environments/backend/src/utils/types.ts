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

export interface Project {
  author: string
  company: string
  id: string
}

export interface User {
  email: string
  id: string
  name: string
}
