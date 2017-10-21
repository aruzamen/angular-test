import { Component, OnInit } from '@angular/core';
import { Router,
         ActivatedRoute } from "@angular/router";
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
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        console.log(params.id);
        if (params.id) {
          this.articleService.getArticle(params.id)
          .subscribe(data => {
            this.article = data;
            this.article['fixedTitle'] = data['title'];
          });
        }
        
      });
  }

  onSave(event: any) {
    console.log(this.article);
    if (this.article.id) {
      this.articleService.updateArticle(this.article.id, this.article).subscribe(data=>{
        console.log('status', data);
        this.router.navigate(['stories']);
      });
    } else {
      this.articleService.createArticle(this.article).subscribe(data=>{
        this.router.navigate(['stories']);
      });
    }
  }

  onCancel(event: any) {
      this.router.navigate(['stories']);
  }

}
