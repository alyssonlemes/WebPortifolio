import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthModule } from '../earth/earth.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, EarthModule],
  exports: [HomeComponent],
})
export class HomeModule {}
