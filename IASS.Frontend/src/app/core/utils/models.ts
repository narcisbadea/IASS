export enum Features {
  Profile = 'Profile',
  Dashboard = 'Dashboard',
  Patients = 'Patients',
}

export enum Permission {
  User = 'User',
  Admin = 'Admin',
  SuperUser = 'SuperUser',
}
export interface FeaturePermission {
  feature: Features;
  permission: Permission;
}
