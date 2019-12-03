import { Input, Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.element = document.getElementById('login-card');   
    this.element.style.top = ((window.screen.height/4) - (this.element.style.height)) + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.element.style.top = ((window.screen.height/4) - (this.element.style.height)) + 'px';
  }

  submit() {
    this.loading = true;
    this.openSnackBar('click');
  }

  openSnackBar(message) {
    this.snackbar.open(message, 'Close', {
      duration: this.duration*1000
    });
  }

}
