import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DecryptorService {
  constructor(private http: HttpClient) { }

  decrypterUrl = 'https://lmqm83ysii.execute-api.us-west-2.amazonaws.com/prod/dbeaver-password-decrypter';

  decrypt(encryptedPassword: string) {
    return this.http.post(this.decrypterUrl, encryptedPassword)
  }
}
