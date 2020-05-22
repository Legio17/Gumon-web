import { Component } from '@angular/core';

import { MaterialContentList } from './models/webcontent.interface';

import { dataJSON } from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Gumon';
  materialList: MaterialContentList[];
  selectedLinkID = 0;

  ngOnInit(): void {
    this.materialList = dataJSON;
  }

  changeSelector(selectedLinkID: number) {
    this.selectedLinkID = selectedLinkID;
  }
}
