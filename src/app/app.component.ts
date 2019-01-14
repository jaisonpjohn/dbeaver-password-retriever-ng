import { Component } from '@angular/core';
import { DecryptorService } from "./decryptor.service";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private decryptorService: DecryptorService) { }
  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

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
