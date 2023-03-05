import { Injectable } from '@angular/core';
import { FeaturePermission, Features, Permission } from './models';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  featureList: FeaturePermission[] = [
    { feature: Features.Profile, permission: Permission.User },
    { feature: Features.Dashboard, permission: Permission.User },
    { feature: Features.Patients, permission: Permission.Admin },
  ];

  constructor() {}

  checkPermission(userRole: string, feature: Features) {
    const featurePermission = this.featureList.find(
      (f) => f.feature === feature
    );
    let permission: Permission;

    if (userRole == 'SuperUser') permission = Permission.SuperUser;
    else if ((userRole = 'Admin')) permission = Permission.Admin;
    else permission = Permission.User;

    if (!!featurePermission) {
      switch (permission) {
        case Permission.User:
          return featurePermission.permission == Permission.User;
        case Permission.Admin:
          return featurePermission.permission !== Permission.SuperUser;
        case Permission.SuperUser:
          return true;
      }
    }
    return false;
  }
}
