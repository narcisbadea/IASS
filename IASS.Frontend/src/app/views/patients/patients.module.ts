import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/shared/shared.module";
import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientsComponent } from "./patients.component";

@NgModule({
  declarations: [
    PatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule,
    NgbPaginationModule,
    ReactiveFormsModule
  ],
})
export class PatientsModule {}
