import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(response => {
      localStorage.setItem('token', response.token);
      alert('Login successful');
    });
  }
}
