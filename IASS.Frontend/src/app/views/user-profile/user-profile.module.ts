import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MedicalHistoryModalComponent } from './info-card/medical-history-modal/medical-history-modal.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AllergiesCardComponent } from './allergies-card/allergies-card.component';
import { AllergiesModalComponent } from './allergies-card/allergies-modal/allergies-modal.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { XRayCardComponent } from './x-ray-card/x-rays-card.component';
import { XRayModalComponent } from './x-ray-card/x-ray-modal/x-rays-modal.component';
import { XRayViewModalComponent } from './x-ray-card/x-ray-view-modal/x-ray-view-modal.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    InfoCardComponent,
    MedicalHistoryModalComponent,
    AllergiesCardComponent,
    AllergiesModalComponent,
    XRayCardComponent,
    XRayModalComponent,
    XRayViewModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    UserProfileRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    CardModule,
    ButtonModule
  ],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
