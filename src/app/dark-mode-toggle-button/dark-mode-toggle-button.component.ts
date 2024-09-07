import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-dark-mode-toggle-button',
  templateUrl: './dark-mode-toggle-button.component.html',
  styleUrls: ['./dark-mode-toggle-button.component.css'],
})
export class DarkModeToggleButtonComponent {
  //#region Properties

  public get isDarkMode(): boolean {
    return this.themeService.isDarkTheme();
  }

  //#endregion

  //#region Constructor

  constructor(
    private navbarService: NavbarService,
    private themeService: ThemeService
  ) {}

  public clickToggleSwicth(poEvent: Event): void {
    this.navbarService.clickToggleSwicth(poEvent);
  }

  //#endregion
}
