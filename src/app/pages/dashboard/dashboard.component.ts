import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.userService.getUser().subscribe( data => {
      this.user = data;
    });
  }
}
