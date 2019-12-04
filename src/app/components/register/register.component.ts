import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  element: any;
  duration = 60;
  loading = false;
  spinnerDiameter = 35;
  name;
  password;
  email;

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private snackbar: MatSnackBar, private authService: AuthService, private route: Router) {}

  ngOnInit() {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  submitCrear() {

    if (!this.form.valid) { return false; }

    this.loading = true;
    console.log('form : name: ' + this.name + ' email: ' + this.email + ' - pass : ' + this.password);
    this.authService.signup(this.name, this.email, this.password).subscribe(data => {
      console.log(data.response.code);
      if (data.response.code !== 201) {
        this.openSnackBar(data.response.message);
        this.loading = false;
      } else {
        this.openSnackBar(data.response.message);
        localStorage.setItem('token', data.response.access_token);
        this.route.navigate(['/home']);
      }
    });
  }


  openSnackBar(message) {
    this.snackbar.open(message, 'Close', {
      duration: this.duration*1000
    });
  }

}
