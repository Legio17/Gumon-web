import { Component, OnInit } from '@angular/core';
import { dataNews } from '../../dataNews.json';

import { NewsPost } from '../../models/webcontent.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  editing: boolean = false;
  adminMode: boolean = false;

  newsList: NewsPost[];

  constructor() {}

  ngOnInit(): void {
    this.newsList = dataNews;
  }
}
