import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListCoinsComponent} from "./list-coins/list-coins.component";
import {SettingsComponent} from "./settings/settings.component";
import {DetailsComponent} from "./details/details.component";


const routes: Routes = [
  {path: '', component: ListCoinsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
