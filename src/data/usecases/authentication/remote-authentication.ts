import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AuthenticationParams, Authetication } from '@/domain/usecases'
import { InvalidCredentialError, UnexpectedError } from '@/domain/erros'
import { AccountModel } from '@/domain/models'

export class RemoteAuthentication implements Authetication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
    AuthenticationParams,
    AccountModel
    >
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialError()
      default:
        throw new UnexpectedError()
    }
  }
}
