import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

import { MaterialContentList } from './../models/webcontent.interface';

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

  onChangeSelector(selectedLinkID: number) {
    this.changedSelector.emit(selectedLinkID);
  }
}
