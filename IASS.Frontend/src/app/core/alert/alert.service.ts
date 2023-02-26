import { Subject, Observable, BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Alert, AlertType, AlertTypeTimeout } from './alert.config';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private overlay: Overlay) {}

  // info(message: string) {
  //   this._createAlert(AlertType.Info, message);
  // }

  // error(message: string) {
  //   this._createAlert(AlertType.Error, message);
  // }

  // warning(message: string) {
  //   this._createAlert(AlertType.Warning, message);
  // }

  // success(message: string) {
  //   this._createAlert(AlertType.Success, message);
  // }

  // show(alertType: AlertType, message: string) {
  //   this._createAlert(alertType, message);
  // }

  // getAlerts(): Observable<Alert> {
  //   return this.alertEvent$.asObservable();
  // }

  // private _createAlert(type: AlertType, message: string) {
  //   // initial setup
  //   if (!this.overlayRef) {
  //     this._createOverlay();
  //   }

  //   this.alertEvent$.next({
  //     type: type,
  //     message: message,
  //     timeout: AlertTypeTimeout[type],
  //   });
  // }

  private _createOverlay() {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: false,
      positionStrategy: this.overlay.position().global().bottom().right(),
      disposeOnNavigation: false,
      maxWidth: 350,
    });

    // this.overlayRef = this.overlay.create(overlayConfig);
    // this.overlayRef.attach(new ComponentPortal(AlertComponent));
  }
}
