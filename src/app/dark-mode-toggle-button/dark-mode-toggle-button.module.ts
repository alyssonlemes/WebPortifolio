import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleButtonComponent } from './dark-mode-toggle-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
@NgModule({
  declarations: [DarkModeToggleButtonComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [DarkModeToggleButtonComponent],
})
export class DarkModeToggleButtonModule {}
