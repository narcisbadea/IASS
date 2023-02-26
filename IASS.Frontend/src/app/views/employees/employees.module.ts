import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesComponent } from './employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { UserProfileModule } from '../user-profile/user-profile.module';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    UserProfileModule,
  ],
})
export class EmployeesModule {}
