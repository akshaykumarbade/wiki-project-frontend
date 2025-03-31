import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  // Method to navigate to Home
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // Method to navigate to Articles
  navigateToArticles() {
    this.router.navigate(['/articles']);
  }

  // Method to navigate to Profile
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  // Search articles by title
  searchArticles() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/articles'], { queryParams: { title: this.searchQuery } });
    }
  }
}
