import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, DashboardComponent, EmployeesComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    LayoutModule,
    HttpClientModule
  ]
})
export class AppModule {}
