import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterRequest } from '../../../interfaces/registerRequest';
import { AuthService } from '../../../services/auth-service';
import { AuthSuccess } from '../../../interfaces/auth-success';
import { User } from 'src/app/interfaces/user';
import { SessionService } from 'src/app/services/sessionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService, 
              private sessionService: SessionService,
              private router: Router)
  {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const registerRequest = this.signupForm.value as RegisterRequest;
      this.authService.register(registerRequest).subscribe(
        (response: AuthSuccess) => {
          localStorage.setItem('token', response.token);
          console.log('token: ',response.token);
          this.authService.me().subscribe((user: User) => {
            this.sessionService.logIn(user);
            this.router.navigate(['/articles']);
            //alert('sumbit register succes'); 
          });
        },
      );
    }
  }
}
