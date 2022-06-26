import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = ''
  disabled = false;
  maxTry = 3;

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.router.navigate(['home']);
    }
  }

  public login() {
    this.dataService.login(this.loginForm.form.value).subscribe((response: any) => {
      if (response.length) {
        this.error = "Log in sucessfull";
        localStorage.setItem('email', response[0].email);
        localStorage.setItem('type', response[0].type);
        this.router.navigate(['home']);
      } else {
        this.maxTry--;
        this.error = "<br>Please enter valid credentials" + "<br>You have left " + this.maxTry + " attempt.";
        if (this.maxTry == 0) {
          this.disabled = true;
        }
      }
    }, (error) => {
      console.error(error);
    });

  }

}
