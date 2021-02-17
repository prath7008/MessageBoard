import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { EntryComponent } from './components/mssgentry.component';
import { BoardComponent } from './components/messgboard.component';
import { ToggleComponent } from './components/toggler.component';
import { ChatComponent } from './container/chat.component';
import { HttpService } from './services/http-service';
import { ApiService } from './services/api-service';


@NgModule({
  declarations: [
    AppComponent,


    BoardComponent,
    EntryComponent,
    ToggleComponent,
    ChatComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
