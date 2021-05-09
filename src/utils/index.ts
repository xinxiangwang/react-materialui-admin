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