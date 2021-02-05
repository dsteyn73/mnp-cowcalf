import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: 'home', component: HomeComponent }
  ];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
