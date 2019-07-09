import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListCoinsComponent} from "./list-coins/list-coins.component";
import {SettingsComponent} from "./settings/settings.component";


const routes: Routes = [
  {path: '', component: ListCoinsComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
