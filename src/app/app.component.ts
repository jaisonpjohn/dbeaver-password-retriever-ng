import { Component } from '@angular/core';
import { DecryptorService } from "./decryptor.service";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from "@angular/material/snack-bar";

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
  constructor(private decryptorService: DecryptorService, public snackBar: MatSnackBar) {
    this.decryptorService.decrypt("OwEKLE4jpQ==")
      .subscribe((data: Response) => {
        console.log("warmed up: "+data.output);
      }
    )
  }
  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  title = 'DBeaver Password Decrypter!\n';
  decPassword = '';

  decrypt(encryptedPassword: string) {
    console.log('Encrypted Password is: '+encryptedPassword);
    this.decryptorService.decrypt(encryptedPassword)
      .subscribe((data: Response) => {
        this.decPassword = data.output
      },
        error1 => {
          console.log(error1);
          this.emailFormControl.setErrors({'incorrect': true});
          this.openSnackBar("Please enter a valid Encrypted Password","Close")
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}

export class Response{
 output: string
}
