import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {SlideshowComponent} from './component/slideshow/slideshow.component';
import {HomeComponent} from './component/home/home.component';
import {weComponent} from './component/we/we.component';
import {ContactComponent} from './component/contact/contact.component';

//constante
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'slideshow', component: SlideshowComponent},
  {path: 'home', component: HomeComponent},
  {path:'nosotros',component:weComponent},
  {path:'contacto',component:ContactComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

