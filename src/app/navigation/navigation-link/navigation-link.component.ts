import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';

import { MaterialContentList } from './../../models/webcontent.interface';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
})
export class NavigationLinkComponent implements OnInit, OnChanges {
  @Input()
  materialList: MaterialContentList[];

  @Output()
  changedSelector: EventEmitter<number> = new EventEmitter();

  constructor() {}

  changeActiveLink(id: number) {
    this.changedSelector.emit(id);
  }

  ngOnChanges(changes) {}

  ngOnInit(): void {}
}
