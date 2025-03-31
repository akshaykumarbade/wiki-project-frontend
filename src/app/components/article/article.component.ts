import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: '',
      content: ''
    });
  }

  onSubmit(): void {
    const { title, content } = this.articleForm.value;
    alert(`Article Saved: ${title}`);
  }
}
