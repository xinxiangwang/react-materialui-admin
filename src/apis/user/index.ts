import service from '../../utils/request'
import {
  ILoginReq,
  ILoginRes,
  IGetUserInfoByTokenRes,
  IGetUserInfoByTokenReq
} from '../types/user'

const { request } = service

/**
 * 用户登录
 */
export function login(data: ILoginReq) {
  return request<any, BaseResponse<ILoginRes>>({
    url: '/user/login',
    method: 'POST',
    data
  })
}

/**
 * 根据token获取用户信息
 */
export function getUserInfoByToken(data: IGetUserInfoByTokenReq) {
  return request<any, BaseResponse<IGetUserInfoByTokenRes>>({
    url: '/user/info',
    method: 'POST',
    data
  })
}