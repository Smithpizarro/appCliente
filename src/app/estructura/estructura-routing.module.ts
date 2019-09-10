import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraComponent } from './estructura.component';

const routes: Routes =
[
{ path: '', redirectTo: 'estructura', pathMatch: 'full'},
{ path: 'estructura', component: EstructuraComponent,
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstructuraRoutingModule { }
