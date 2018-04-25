import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MoveButtonComponent } from './move-button/move-button.component';
import { AlertModule } from 'ngx-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    MoveButtonComponent
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
