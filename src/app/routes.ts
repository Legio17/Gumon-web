import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MaterialComponent } from './pages/material/material.component';
import { OrderComponent } from './pages/order/order.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/notFound/notfound.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'material/:materialId',
    component: MaterialComponent,
    pathMatch: 'full',
  },
  { path: 'order', component: OrderComponent, pathMatch: 'full' },
  { path: 'location', component: LocationComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
