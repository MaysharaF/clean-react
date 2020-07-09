import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialError } from '@/domain/erros/invalid-credentials-erros'
import { UnexpectedError } from '@/domain/erros/unexpected-error'
import { AccountModel } from '@/domain/models/account-models'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
    AuthenticationParams,
    AccountModel
    >
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialError()
      default:
        throw new UnexpectedError()
    }
  }
}
