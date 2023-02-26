import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { TimeoutDirective } from './timeout.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [AlertComponent, TimeoutDirective],
  imports: [CommonModule, OverlayModule],
  exports: [AlertComponent],
})
export class AlertModule {}
