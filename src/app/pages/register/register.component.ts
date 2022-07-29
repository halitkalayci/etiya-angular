import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  // companyName = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      companyName: [
        '', // default değer
        [Validators.required, Validators.minLength(2)] // doğrulama
      ]
    });
    // new FormGroup({
    //   companyName: this.companyName,
    // });
  }

  register(): void {
    if (!this.registerForm.valid) {
      // geçersiz
      console.warn('Gerekli alanları doldurunuz.');
      return;
    }

    console.log(this.registerForm.value);
  }
}
