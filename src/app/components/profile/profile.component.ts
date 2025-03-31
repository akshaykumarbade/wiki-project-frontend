import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule, MatListModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    articles: [
      { id: 1, title: 'Angular Basics' },
      { id: 2, title: 'Advanced Angular' },
    ]
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Here you would fetch the user's details from the backend (e.g., using a UserService)
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }
}
