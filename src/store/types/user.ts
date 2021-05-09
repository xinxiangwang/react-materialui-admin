export interface IUserBaseInfo {
  name?: string
  avatar?: string
  introduction?: string
  roles?: Array<string>
}

export interface IUser extends IUserBaseInfo {
  token?: string
}

export interface ILoginAction {
  token: string
}