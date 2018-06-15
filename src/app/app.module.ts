import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { RulesComponent } from './rules/rules.component';
import { RidesComponent } from './rides/rides.component';
import { WeatherComponent } from './weather/weather.component';
import { PhotosComponent } from './photos/photos.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    NavComponent,
    RulesComponent,
    RidesComponent,
    WeatherComponent,
    PhotosComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
