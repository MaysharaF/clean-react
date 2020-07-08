import { AccountModel } from '../models/account-models'

type AuthenticationParams = {
  email: string
  password: string
}

export interface Authetication {
  auth(param: AuthenticationParams): Promise<AccountModel>
}

const test
