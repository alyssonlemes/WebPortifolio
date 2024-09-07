import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setContactMargin();
  }

  /** Set the margin for the contact's div. */
  public setContactMargin(): void {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const content = document.querySelector('.contactContent');
    const screenHeight = window.innerHeight;

    const margin = ((screenHeight - header!.clientHeight - footer!.clientHeight - content!.clientHeight)/2)*0.96;

    content!.setAttribute('style', `margin: ${margin}px 0 ${margin}px 0`);
  }
}
