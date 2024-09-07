import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [FooterComponent],
})
export class FooterModule {}
