import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, CommonModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    // Initialize the form group with validation
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Here you would fetch the user's current profile data and prepopulate the form.
    // Example: this.profileForm.patchValue({ name: user.name, email: user.email });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Here you would handle submitting the form to update the profile
      console.log('Updated Profile:', this.profileForm.value);

      // After saving the changes, redirect back to the profile page
      this.router.navigate(['/profile']);
    }
  }
}
