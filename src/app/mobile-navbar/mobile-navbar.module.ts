import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleButtonModule } from '../dark-mode-toggle-button/dark-mode-toggle-button.module';
import { MobileNavbarComponent } from './mobile-navbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, DarkModeToggleButtonModule],
  exports: [],
})
export class MobileNavbarModule {}
