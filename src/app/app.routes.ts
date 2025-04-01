import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'articles', component: ArticleListComponent },
    { path: 'articles/new', component: ArticleComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: 'article/:id', component: ArticleComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],  // Make sure you're using RouterModule here
    exports: [RouterModule],
})
export class AppRoutingModule {}  // Export the AppRoutingModule to be used in main.ts
