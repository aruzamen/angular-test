import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'stories',
    component: ArticleListComponent
  },
  {
    path: 'edit/:id',
    component: ArticleEditComponent
  },
  {
    path: 'new',
    component: ArticleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
