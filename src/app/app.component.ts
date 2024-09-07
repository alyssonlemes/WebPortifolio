import { Component, AfterViewInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor(
    private themeService: ThemeService,
    public googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngAfterViewInit(): void {
    this.themeService.setThemeSettings();
  }
}
