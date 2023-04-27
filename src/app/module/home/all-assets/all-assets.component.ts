import { Component, OnInit } from '@angular/core';
import { homeCardsData } from 'src/app/common/dummyData';

@Component({
  selector: 'app-all-assets',
  templateUrl: './all-assets.component.html',
  styleUrls: ['./all-assets.component.scss']
})
export class AllAssetsComponent implements OnInit {
  homeCardsData:any[]=homeCardsData;
  constructor() { }

  ngOnInit(): void {
  }

}
