//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginForm {
  username: string
  password: string
}
interface dataType {
  token?: string
  message?: string
}
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfo {
  code: number
  data: dataType
}
interface user {
  code: number
  data: dataType
}
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//定义获取用户信息返回数据类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
