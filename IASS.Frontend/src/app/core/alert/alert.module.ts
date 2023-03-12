import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { TimeoutDirective } from './timeout.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { AlertsContainerComponent } from './alerts-container.component';

@NgModule({
  declarations: [AlertsContainerComponent, AlertComponent, TimeoutDirective],
  imports: [CommonModule, OverlayModule],
})
export class AlertModule {}
