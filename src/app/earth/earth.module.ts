import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthComponent } from './earth.component';

@NgModule({
  declarations: [EarthComponent],
  imports: [CommonModule],
  exports: [EarthComponent],
})
export class EarthModule {}
