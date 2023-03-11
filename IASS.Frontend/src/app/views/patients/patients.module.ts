import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { SharedModule } from "src/app/shared/shared.module";
import { UserProfileModule } from "../user-profile/user-profile.module";
import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientsTableComponent } from "./patients-table/patients-table.component";
import { PatientsComponent } from "./patients.component";

@NgModule({
  declarations: [
    PatientsComponent,
    PatientsTableComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule,
    NgSelectModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    UserProfileModule,
    FormsModule
  ],
})
export class PatientsModule {}
