import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare global {
  interface Window {
    gtag: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.trackPageView(event.urlAfterRedirects);
    });
  }

  trackPageView(pagePath: string) {
    if (window.gtag) {
      window.gtag('config', 'G-XCFJ5ZRZMV', { 'page_path': pagePath });
    }
  }
}
