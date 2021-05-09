export interface IUser {
  token?: string
  name?: string
  avatar?: string
  introduction?: string
  roles?: Array<string>
}

export interface ILoginAction {
  token: string
}