import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstructuraRoutingModule } from './estructura-routing.module';
import { EstructuraComponent } from './estructura.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icons/icons.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { NuevaPersona } from './estructura.component';

@NgModule({
  imports: [
    CommonModule,
    EstructuraRoutingModule,
    NgbModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EstructuraComponent, MenuComponent, FooterComponent,NuevaPersona],
  entryComponents: [NuevaPersona],
})
export class EstructuraModule { }
