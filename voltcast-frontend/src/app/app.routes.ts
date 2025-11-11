import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: Dashboard},
];
