import {Injectable} from '@angular/core';
import {ThemeService} from "./theme.service";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  //region properties
  private menu!: HTMLDivElement;
  private body!: HTMLDivElement;
  private burger!: HTMLDivElement;
  private footer!: HTMLDivElement;
  private themeButton!: HTMLInputElement;

  //endregion properties
  //region methods

  constructor(private themeService: ThemeService) {
    this.setProperties();
  }

  /** This method set the properties of the class. */
  public setSettingsNav(): void{
    this.setProperties();
    this.changeDivDisplay(this.menu, "none");
  }

  /** This method change the display of the footer, the body and the menu for hide or show the burger menu. */
  private setMenuBurger(): void{
    this.setProperties();
    if (this.burger.classList.contains('is-active'))
      this.changeDivsDisplay([this.body, this.footer, this.menu], ["none", "none", "block"]);
    else
      this.changeDivsDisplay([this.body, this.footer, this.menu], ["block", "block", "none"]);
  }

  /** This method is called when the user click on the hamburger menu, it show or hide the menu. */
  public clickHamburger(): void{
    this.setProperties();
    this.burger.classList.toggle('is-active');
    this.setMenuBurger();
  }

  /** This method set the toggle switch button to true or false. 
   * @param isActive The value to set the toggle switch button.
   */
  public setBurgerMenuSettings(isActive: boolean): void{
    const toggle: NodeListOf<HTMLInputElement> = document.querySelectorAll('.toggle-checkbox');
    toggle.forEach(e => e.checked = isActive);
  }

  /** This method is called when the user click on the toggle switch and change the theme.
   * @param event The event of the click.
   */
  public clickToggleSwicth(event: Event): void{
    this.themeService.changeTheme();
    this.setBurgerMenuSettings((event.target as HTMLInputElement).checked);
  }

  /** This method set the menu with the width of the screen. */
  public setMenuWithWidth(): void{
    this.setProperties();
    const local: NavbarService = this;
    addEventListener('resize', function () {
        if (window.innerWidth > 970){
          local.changeDivsDisplay([local.body, local.menu], ["block", "none"]);
          local.burger.classList.remove('is-active');
        }
    });
  }

  /** This method applies the display given in parameter to a div.
   * @param div The div to change the display.
   * @param display The display to apply to the div.
   */
  public changeDivDisplay(div: HTMLDivElement, display: string): void {
    div.style.display = display;
  }

  /** This method applies the displays given in parameter to a list of div.
   * @param divs A table of divs to change the display.
   * @param displays A table of displays to apply to the divs.
   */
  public changeDivsDisplay(divs: HTMLDivElement[], displays: string[]): void {
    divs.forEach((div , index) => this.changeDivDisplay(div, displays[index]));
  }

  /** This method set the properties of the class. */
  private setProperties(): void{
    this.menu = this.menu ? this.menu : document.querySelector('.burger-menu') as HTMLDivElement;
    this.body = this.body ? this.body : document.querySelector('.maindiv') as HTMLDivElement;
    this.burger = this.burger ? this.burger : document.querySelector('.hamburger') as HTMLDivElement;
    this.footer = this.footer ? this.footer : document.querySelector("footer") as HTMLDivElement;
    this.themeButton = this.themeButton ? this.themeButton : document.querySelector('.toggle-checkbox') as HTMLInputElement;
  }

  public clickMenuEvent(): void{
    const menu = document.querySelectorAll('.burger-menu a') as NodeListOf<HTMLAnchorElement>;
    menu.forEach((menuButton) => {
      menuButton.addEventListener('click', () => {
        this.clickHamburger();
      });
    });
  }

  //endregion methods
}
