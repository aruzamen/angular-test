import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Article } from '../shared/model/article'
import { ArticleService } from '../shared/services/article.service'

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article: Article = {};

  constructor(private articleService: ArticleService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        console.log(params.id);
        this.articleService.getArticle(params.id)
          .subscribe(data => {
            this.article = data;
            this.article['fixedTitle'] = data['title'];
          });
      });
  }

  onSave(event: any) {
    console.log(this.article);

  }

}
