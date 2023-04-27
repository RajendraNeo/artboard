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

  headerList = ['Home', 'Dashboard', 'Leaderboards', 'Community','Tools', 'Browse'];
  activeTabs:number=0;
  sidebarList: string[] = [];
  updateSidebar(headerItem: string,index:any) {
    switch (headerItem) {
      case 'Home':
        this.sidebarList = ['All Assets', 'Top Stories', 'Guides & Tutorials', 'Help'];
        this.activeTabs=index;
        break;
      case 'Dashboard':
        this.sidebarList = ['Portfolio', 'Performance', 'Import Assets', 'For You'];
        this.activeTabs=index;
        break;
      case 'Leaderboards':
        this.sidebarList = ['Virtual Land', 'Real Estate/NFTS', 'Crowdfunding', 'Phyrtual-Hybrid '];
        this.activeTabs=index;
        break;
      case 'Community':
        this.sidebarList = ['News Feed', 'Trending', 'My Groups', 'My Pages'];
        this.activeTabs=index;
        break;
      case 'Tools':
        this.sidebarList=['Compare', 'Portfolio Builder'];
        this.activeTabs=index;
        break;  
      case 'Browse':
        this.sidebarList = ['Listings', 'My Store'];
        this.activeTabs=index;
        break;
    }
  }

}
