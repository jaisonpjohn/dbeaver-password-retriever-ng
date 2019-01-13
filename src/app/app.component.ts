import { Component } from '@angular/core';
import { DecryptorService } from "./decryptor.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private decryptorService: DecryptorService) { }

  title = 'DBeaver Password Decrypter!\n';
  encPassword = '';
  decPassword = '';

  decrypt(encryptedPassword: string) {
    console.log('Encrypted Password is: '+encryptedPassword);
    this.decryptorService.decrypt(encryptedPassword)
      .subscribe((data: Response) => {
        this.decPassword = data.output
      });
  }
}

export class Response{
 output: string
}
