import { HttpClientModule } from '@angular/common/http';
import { InternServiceService } from './intern-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserServiceService} from './user-service.service';
import{ FormsModule } from '@angular/forms';
import { InternComponent } from './intern/intern.component';

@NgModule({
  declarations: [
    AppComponent,
    InternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService,InternServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
