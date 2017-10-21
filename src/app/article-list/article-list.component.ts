import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../shared/services/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(data => {
        console.log(data);
      });
  }

}
