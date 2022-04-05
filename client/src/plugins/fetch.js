import router from "@/router"

let baseUrl
export async function $fetch(url,options) {       //请求路径和请求参数
  const finalOptions = Object.assign({},{     //添加请求头
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include'
  },options)
  const response = await fetch(`${baseUrl}${url}`,finalOptions)     //fetch是Web API
  if(response.ok) {
    const data = await response.json()
    return data
  }else if (response.status === 403){
    //TODO
  } else {
    const message = await response.text()
    const error = new Error(message)
    error.response = response
    throw error
  }
}

export default {
  install (Vue,options) {
    baseUrl = options.baseUrl
    Vue.prototype.$fetch = $fetch
  }
}