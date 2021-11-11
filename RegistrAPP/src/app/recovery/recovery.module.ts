import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoveryPageRoutingModule } from './recovery-routing.module';

import { RecoveryPage } from './recovery.page';

import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoveryPageRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [RecoveryPage]
})
export class RecoveryPageModule {}
