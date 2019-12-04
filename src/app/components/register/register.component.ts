import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import {Validators, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  duration = 60;
  loading = false;
  spinnerDiameter = 35;

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private snackbar: MatSnackBar, private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  submitCrear() {
    if (!this.form.valid) {
      return false;
    }

    this.loading = true;
    this.authService.signup(this.form.value).subscribe(data => {
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
      duration: this.duration * 1000
    });
  }

}
