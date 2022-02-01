import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from "./shared/enums/router";
import { MainComponent } from "./screens/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: AppRoutes.Invalid, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

