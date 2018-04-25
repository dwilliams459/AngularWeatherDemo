import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MoveButtonComponent } from './move-button/move-button.component';
import { AlertModule } from 'ngx-bootstrap'
import { WeatherButtonComponent } from './weather-button/weather-button.component';
import * as jsonPath from 'jsonparse/jsonparse';

@NgModule({
  declarations: [
    AppComponent,
    MoveButtonComponent,
    WeatherButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
