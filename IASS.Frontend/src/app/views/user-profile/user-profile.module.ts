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
import { SurgeryCardComponent } from './surgery-card/surgery-card.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SurgeryModalComponent } from './surgery-card/surgery-modal/surgery-modal.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    InfoCardComponent,
    MedicalHistoryModalComponent,
    SurgeryCardComponent,
    SurgeryModalComponent
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
    NgSelectModule
  ],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
