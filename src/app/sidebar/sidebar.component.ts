import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarList!: string[];
  @Input() menuItems!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
