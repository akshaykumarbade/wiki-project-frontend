import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [ArticleListComponent, ArticleCreateComponent],
  imports: [CommonModule, FormsModule, RouterModule, QuillModule.forRoot()],
})
export class ArticleModule {}
