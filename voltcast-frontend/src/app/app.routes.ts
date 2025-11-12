import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
//import { ShellyPage } from './components/shelly-page/shelly-page';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'dashboard', component: Dashboard},
  //{path: 'shelly', component: ShellyPage}
];
