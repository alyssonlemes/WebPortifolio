import { AfterViewInit, Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  constructor(private navbarService: NavbarService) {}

  ngAfterViewInit(): void {
    this.navbarService.setMenuWithWidth();
    this.navbarService.setBurgerMenuSettings(true);
    this.navbarService.setSettingsNav();
    this.navbarService.clickMenuEvent();
  }

  /** This method is called when the user click on the hamburger menu, it show or hide the menu. */
  public clickHamburger(): void {
    this.navbarService.clickHamburger();
  }
}
