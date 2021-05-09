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
  token: string | undefined
}

/**
 * 根据token获取用户信息
 */
 export interface IGetUserInfoByTokenReq {
  token: string | undefined
}

/**
 * 根据token获取用户信息
 */
export interface IGetUserInfoByTokenRes {
  name: string
  avatar: string
  introduction: string
  roles: Array<string>
}
