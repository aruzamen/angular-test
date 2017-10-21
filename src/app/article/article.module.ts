import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "../material/material.module";
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleService } from '../shared/services/article.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ArticleListComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
