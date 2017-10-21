import { Component,
         EventEmitter,
         Input,
         Output,
         OnInit } from '@angular/core';
import { Article } from "../shared/model/article";
import { MatGridTile } from "@angular/material";

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  @Input()
  article: Article;

  // Output event
  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();  

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.select.emit(this.article);
  }

}
