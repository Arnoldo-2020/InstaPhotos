import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { IonicStorageModule } from '@ionic/storage';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicModule,
    RouterModule,
    LoginPageRoutingModule
  ],
  providers:[IonicStorageModule],
  declarations: [LoginPage]
})
export class LoginPageModule {}
