import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuItems!: any[];
  constructor() { }

  ngOnInit(): void {
    this.updateSidebar('Home',this.activeTabs);
  }

  headerList = ['Home', 'About', 'Services', 'Contact', 'FAQ'];
  activeTabs:number=0;
  sidebarList: string[] = [];
  updateSidebar(headerItem: string,index:any) {
    switch (headerItem) {
      case 'Home':
        this.sidebarList = ['Welcome', 'Features', 'Pricing'];
        this.activeTabs=index;
        break;
      case 'About':
        this.sidebarList = ['Company', 'Team', 'History'];
        this.activeTabs=index;
        break;
      case 'Services':
        this.sidebarList = ['Web Development', 'App Development', 'Design'];
        this.activeTabs=index;
        break;
      case 'Contact':
        this.sidebarList = ['Location', 'Phone', 'Email'];
        this.activeTabs=index;
        break;
      case 'FAQ':
        this.sidebarList = ['Questions', 'Answers', 'Contact Us'];
        this.activeTabs=index;
        break;
    }
  }

}
