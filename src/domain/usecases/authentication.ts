import { AccountModel } from '@/domain/models/account-models'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authetication {
  auth(param: AuthenticationParams): Promise<AccountModel>
}
