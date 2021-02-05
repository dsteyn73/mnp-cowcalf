import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminService } from './admin.service';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AppRoutingModule ],
  bootstrap:    [ AppComponent ],
  providers: [AdminService],

})
export class AppModule { }
