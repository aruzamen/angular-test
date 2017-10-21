import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "../material/material.module";
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleService } from '../shared/services/article.service';
import { ArticleListItemComponent } from '../article-list-item/article-list-item.component';
import { ArticleEditComponent } from '../article-edit/article-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ArticleListComponent, ArticleListItemComponent, ArticleEditComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
