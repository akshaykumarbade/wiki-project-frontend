import { Component, OnInit } from '@angular/core';
import { Router, RouterModule  } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule, CommonModule, RouterModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit{
  articles = [
    { id: 1, title: 'Angular Basics' },
    { id: 2, title: 'Advanced Angular' },
    { id: 3, title: 'React vs Angular' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Here you would fetch the list of articles from the backend (e.g., using an ArticleService)
  }
}
