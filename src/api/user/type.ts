//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginForm {
  username: string,
  password: string
}
interface dataType {
  token?: string,
  message?: string
}
export interface loginResponseData {
  code: number,
  data: dataType
}

interface userInfo {
  code: number,
  data: dataType,
}
interface user {
  code: number,
  data: dataType,
}

