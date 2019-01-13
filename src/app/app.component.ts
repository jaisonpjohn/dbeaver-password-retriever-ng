import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DBeaver Password Decrypter!\n';
  encPassword = '';
  decPassword = '';

  sendEncrypted(encryptedPassword: String): void {
    this.decPassword = this.encPassword
    console.log('Encrypted Password is: '+encryptedPassword);
  }
}
