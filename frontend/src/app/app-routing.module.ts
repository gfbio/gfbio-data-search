import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GfbioComponent } from "./gfbio/gfbio.component";
import { AuthGuard } from "./guards/auth.guard";
import { ChangelogComponent } from "./changelog/changelog.component";
//import {BioDivComponent} from './bio-div/bio-div.component';

const routes: Routes = [
  // { path: '', component: GfbioComponent, canActivate: [AuthGuard] },
  { path: "", component: GfbioComponent },
  { path: "changelog", component: ChangelogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
