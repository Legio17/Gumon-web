import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MaterialContentList } from '../../../../models/webcontent.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input()
  materialList: MaterialContentList[];

  @Output()
  changedSelector: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
