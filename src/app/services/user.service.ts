import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { Usuario } from '../interfaces/interfaces';


const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;

  constructor(private http: HttpClient,
    private nativeStorage: NativeStorage,
    private storage: Storage) {

  }


  login(email: string, password: string) {

    const data = { email, password };

    return new Promise(resolve => {

      this.http.post(`${url}/user/login`, data)
        .subscribe(resp => {
          console.log(resp);

          if (resp['ok']) {
            // this.saveToken(resp['token']);
            this.saveTokenHibrid(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            //this.nativeStorage.clear();
            this.storage.clear();
            resolve(false);
          }

        });

    });

  }

  register(user: Usuario) {

    return new Promise(resolve => {

      this.http.post(`${url}/user/create`, user)
        .subscribe(resp => {
          console.log(resp);

          if (resp['ok']) {
            // this.saveToken(resp['token']);
            this.saveTokenHibrid(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            //this.nativeStorage.clear();
            this.storage.clear();
            resolve(false);
          }
        });

    });

  }

  async saveTokenHibrid(token: string) {

    this.token = token;
    await this.storage.set('token', token);

  }

  // async saveToken( token: string ){



  //   this.token = token;

  //   await this.nativeStorage.setItem( 'token', token );

  // }

}
