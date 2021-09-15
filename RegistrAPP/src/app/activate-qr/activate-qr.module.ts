import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateQrPageRoutingModule } from './activate-qr-routing.module';

import { ActivateQrPage } from './activate-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateQrPageRoutingModule
  ],
  declarations: [ActivateQrPage]
})
export class ActivateQrPageModule {}
