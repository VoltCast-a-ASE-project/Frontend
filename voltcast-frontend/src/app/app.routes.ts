import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'dashboard', component: Dashboard},
];
