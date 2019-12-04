import { Input, Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  element: any;
  duration = 60;
  loading = false;
  spinnerDiameter = 35;
  username;
  password;

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private snackbar: MatSnackBar, private authService: AuthService, private route: Router) {}

  ngOnInit() {
    this.element = document.getElementById('login-card');   
    this.element.style.top = ((window.screen.height/4) - (this.element.style.height)) + 'px';
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.element.style.top = ((window.screen.height/4) - (this.element.style.height)) + 'px';
  }

  submit() {

    if(!this.form.valid) return false;

    this.loading = true;
    console.log('form : username: ' + this.username + ' - pass : ' + this.password );
    this.authService.login(this.username, this.password).subscribe(data => {
      console.log(data.response.code);
      if(data.response.code !== 200){
        this.openSnackBar(data.response.message);
        this.loading = false;
      }else{
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
