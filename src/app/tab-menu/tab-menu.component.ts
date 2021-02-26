import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss'],
})
export class TabMenuComponent implements OnInit {

  constructor( private themeService:ThemeService) { }

  ngOnInit() {}

  themeToggle()
  {
    this.themeService.setToggle();
  }

}
