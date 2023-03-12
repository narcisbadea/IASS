import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Features } from './core/utils/models';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },
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
        path: 'patients',
        loadChildren: () =>
          import('./views/patients/patients.module').then(
            (m) => m.PatientsModule
          ),
        data: { feature: Features.Patients },
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./views/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
        data: { feature: Features.Profile },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
