import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import {SlideshowComponent} from './component/slideshow/slideshow.component';
import {HomeComponent} from './component/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

