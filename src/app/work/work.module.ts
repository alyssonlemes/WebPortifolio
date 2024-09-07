import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [WorkComponent],
})
export class WorkModule {}
