/**
 * 登录接口请求结构
 */
export interface ILoginReq {
  username: string
  password: string
}
/**
 * 登录接口响应结构
 */
export interface ILoginRes {
  token: string
}
