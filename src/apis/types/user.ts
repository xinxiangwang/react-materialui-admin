export interface ILoginReq {
  username: string
  password: string | number
}

export interface ILoginRes extends BaseResponse {
  token: string
}
