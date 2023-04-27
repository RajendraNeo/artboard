import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-assets-card',
  templateUrl: './assets-card.component.html',
  styleUrls: ['./assets-card.component.scss']
})
export class AssetsCardComponent implements OnInit {

  @Input() homeCardData:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.homeCardData)
  }

}
