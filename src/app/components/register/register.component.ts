import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message = ''

  @ViewChild('registerForm') registerForm: NgForm;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() { }

  public register() {
    this.message = "";
    this.dataService.register(this.registerForm.form.value).subscribe((response) => {
      this.registerForm.reset();
      this.message = "User registered successfully";
    });
  }

  public resetForm() {
    this.registerForm.reset();
  }
}
