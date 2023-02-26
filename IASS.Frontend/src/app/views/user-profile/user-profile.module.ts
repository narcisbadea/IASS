import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from 'src/app/layout/layout.module';
import { InfoCardComponent } from './info-card/info-card.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    UserProfileRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
