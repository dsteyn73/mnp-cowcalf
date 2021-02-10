import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
//import { AdminService } from './admin/admin.service';

import { AppRoutingModule } from "./app-routing.module";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { CowsService } from './cows.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, AdminComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [CowsService]
})
export class AppModule {}
