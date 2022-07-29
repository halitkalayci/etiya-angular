import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  companyName = new FormControl('', Validators.required);
  constructor() {}

  ngOnInit(): void {}

  register() {
    console.log(this.companyName);
  }
}
