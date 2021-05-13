/**
 * 获取url参数
 */
export function getUrlSearchValue(url: string, param: string): string | null {
  if (!url || !param) return null
  url = url.substr(1) || url.split('?')[1]
  if (!url) return null
  if (url.indexOf(param) === -1) return null
  var reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
  var r = decodeURI(url).match(reg)
  if (!r) return null
  return r[2]
}

/**
 * 函数防抖节流
 * @param fn 节流函数
 * @param t 时长
 * @returns 
 */
 export function throttle (fn: { apply: (arg0: any, arg1: any[]) => void }, t: number) {
  let flag = true
  const interval = t || 500
  return function (this: any, ...args: any) {
    if (flag) {
      fn.apply(this, args)
      flag = false
      setTimeout(() => {
        flag = true
      }, interval)
    }
  }
}
