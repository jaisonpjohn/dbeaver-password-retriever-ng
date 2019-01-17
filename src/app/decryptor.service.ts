import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError} from "rxjs";

@Injectable()
export class DecryptorService {
  constructor(private http: HttpClient) { }

  decrypterUrl = 'https://lmqm83ysii.execute-api.us-west-2.amazonaws.com/prod/dbeaver-password-decrypter';

  decrypt(encryptedPassword: string) {
    if(!encryptedPassword){
      console.log("Empty encryptedPassword. Returning")
      return throwError("Empty Encrypted String")
    }
    return this.http.post(this.decrypterUrl, encryptedPassword)
  }
}
