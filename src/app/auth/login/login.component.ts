import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  hide = true;
  
  constructor(private fb: FormBuilder, private apiService: ApiService, private alertService: AlertService, private route: Router) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      let url = '/auth/login';
      let body = this.loginForm.value;
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      const options = { headers: headers };
      this.apiService.post(url, body, options).subscribe((data: any) => {
        if (data._id) {
          let user = data.email;
          this.alertService.showSuccess('Login SuccessFull ');
          localStorage.setItem('isLoggedIn','1');
          localStorage.setItem('loginUser', JSON.stringify(user));
          localStorage.setItem('token', data.token);
          this.route.navigate(['/users']); // set dedhbord page url
        } else {
          this.alertService.showError('Login Failed ?');
        }
      });
    } else {
      this.alertService.showWarning('This is input Empty');
    }
  }
}
