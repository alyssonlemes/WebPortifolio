import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /** This method change the theme of the website. */
  public changeTheme(): void{
    if (localStorage.getItem('theme') == "light"){
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove("dark");
    }
  }

  /** This method set the theme to dark. */
  public setThemeSettings(): void{
    localStorage.setItem('theme', 'light');
    this.changeTheme();
  }

  /** This method get if the theme is dark or not. */
  public isDarkTheme(): boolean{
    return localStorage.getItem('theme') === "dark";
  }
}
