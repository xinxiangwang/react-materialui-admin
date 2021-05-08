/**
 * 响应数据公用结构
 */
declare interface BaseResponse<T = {}> {
  code: number
  message: string
  data: T
}

/**
 * 全局action公用结构
 */
// declare interface IAction<T> extends Action<symbol> {
//   payload: T
// }
declare interface IAction<T> {
  type: symbol
  payload: T
}