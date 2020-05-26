import { Component } from '@angular/core';

import { MaterialContentList } from './../../models/webcontent.interface';

import { dataJSON } from './../../data.json';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  materialList: MaterialContentList[];
  selectedLinkID = 0;

  ngOnInit(): void {
    this.materialList = dataJSON;
  }

  changeSelector(selectedLinkID: number) {
    this.selectedLinkID = selectedLinkID;
  }
}
