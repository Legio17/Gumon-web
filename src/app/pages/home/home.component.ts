import { Component } from '@angular/core';

import { MaterialContentList } from './../../models/webcontent.interface';

import { dataJSON } from './../../data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  materialList: MaterialContentList[];
  selectedLinkID = 0;

  ngOnInit(): void {
    this.materialList = dataJSON;
  }

  changeSelector(selectedLinkID: number) {
    this.selectedLinkID = selectedLinkID;
  }
}
