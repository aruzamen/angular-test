import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../shared/services/article.service";
import { Article } from "../shared/model/article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(data => {
        console.log(data);
        this.articles = data;
      });
  }

  onSelect(article: Article) {
    console.log('Selected', article)

  }

}
