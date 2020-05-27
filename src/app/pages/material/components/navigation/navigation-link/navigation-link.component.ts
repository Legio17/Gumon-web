import { Component, EventEmitter, Output, Input } from '@angular/core';

import { MaterialContentList } from './../../../../../models/webcontent.interface';
@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
})
export class NavigationLinkComponent {
  @Input()
  materialList: MaterialContentList[];

  @Output()
  changedSelector: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
