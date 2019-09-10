import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'mestructura', pathMatch: 'full' },
  { path: 'mestructura', loadChildren: './estructura/estructura.module#EstructuraModule'},
  { path: '**', redirectTo: '' } // otherwise redirect to home
  ];

  const config: ExtraOptions={useHash:true};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,config)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
