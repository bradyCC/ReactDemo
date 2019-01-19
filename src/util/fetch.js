/**
 * Created by brady on 2019/1/19.
 */
import URL from './config'
import fetch from 'cross-fetch'

async function myfetch(options) {
  let method = options.method || 'POST'
  let url = `${URL.HTTP}/${options.url}`
  let body = Object.prototype.toString.call(options.data) === "[object FormData]"?options.data:JSON.stringify(options.data)
  let ContentType = options.ContentType || 'application/x-www-form-urlencoded'
  let credentials = options.credentials === true?true:false
  try {
    let data = (await fetch(
      url, {method, body, credentials, headers: {'Content-Type': ContentType}}
      )
        .then(res => res.json())
        .then(data => {
          return data
        })
    )
      return data
  } catch (err) {
    alert(`服务器出错，清联系管理员或稍后再试`)
    return false
  }
}


export default myfetch