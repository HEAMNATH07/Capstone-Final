import { Routes } from '@angular/router';
import { BikeParkingComponent } from './bike-parking/bike-parking.component';
import { CarParkingComponent } from './car-parking/car-parking.component';
import { OtherVehicleComponent } from './other-vehicle/other-vehicle.component';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventRequestComponent } from './event-request/event-request.component';
import { CreateEventRequestComponent } from './create-event-request/create-event-request.component';
import { ParticipateEventComponent } from './participate-in-event/participate-event.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { RegisterResourcePersonComponent } from './register-resource-person/register-resource-person.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/role-selection', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'role-selection', component: RoleSelectionComponent },
  { path: 'register-employee', component: RegisteremployeeComponent },
  { path: 'register-resource-person', component: RegisterResourcePersonComponent },
  { path: 'register-admin', component: RegisterAdminComponent },
  { path:'home-page', component: HomePageComponent},
  {path:'event-request', component: EventRequestComponent},
  { path:'workspace', component: WorkspaceComponent},
  { path:'create-event-request', component: CreateEventRequestComponent},
  { path: 'participate-event', component: ParticipateEventComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'select-vehicle', component: SelectVehicleComponent },
  { path: 'bike-parking', component: BikeParkingComponent },
  { path: 'car-parking', component: CarParkingComponent },
  { path: 'other-vehicle', component: OtherVehicleComponent },
];
