import { Component } from '@angular/core';

import { MaterialContentList } from './../../models/webcontent.interface';

import { dataJSON } from './../../data.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  materialList: MaterialContentList[];
  selectedLinkID: number = 0;

  constructor(ar: ActivatedRoute) {
    ar.params.subscribe((data) => {
      this.selectedLinkID = data.materialId;
    });
  }

  ngOnInit(): void {
    this.materialList = dataJSON;
  }
}
