import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
//import { AdminService } from './admin.service';

import { AppRoutingModule } from "./app-routing.module";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, AdminComponent],
  bootstrap: [AppComponent]
  //providers: [AdminService],
})
export class AppModule {}
