import { mockAccountModel } from '@/domain/test'
import { AuthenticationParams, Authentication } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticationParams
  async auth (params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}
