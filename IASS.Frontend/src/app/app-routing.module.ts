import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [AuthGuard],
        data: { feature: Features.Dashboard },
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./views/employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
        canActivate: [AuthGuard],
        data: { feature: Features.Employees },
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./views/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
        canActivate: [AuthGuard],
        data: { feature: Features.Profile },
      },
    ],
  },
];

const routes_dev: Routes = [
  {
    path: 'style',
    loadChildren: () =>
      import('./views/style/style.module').then((m) => m.StyleModule),
  },
];

if (!environment.production) {
  routes.push(...routes_dev);
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
