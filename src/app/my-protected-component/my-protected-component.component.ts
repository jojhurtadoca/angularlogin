import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-protected-component',
  templateUrl: './my-protected-component.component.html',
  styleUrls: ['./my-protected-component.component.scss']
})
export class MyProtectedComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
