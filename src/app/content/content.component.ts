import { Component, OnInit, Input } from '@angular/core';

import { MaterialContentList } from './../models/webcontent.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input()
  materialType: MaterialContentList;

  constructor() {}

  ngOnInit(): void {}
}
