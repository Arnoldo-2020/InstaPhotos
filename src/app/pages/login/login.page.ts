
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  @ViewChild('principalSlide') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
    {
      img: 'av-9.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView : 3.5
  }

  loginUser = {
    email: 'test1@gmail.com',
    password: '123456'
  }

  registerUser = {
    nombre: 'Test',
    email: 'test',
    password: '123456',
    avatar: 'av-1.png'
  }

  constructor( private userService: UserService,
               private navCtrl: NavController,
               private uiService: UiServiceService) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {

    if(fLogin.invalid){ return; };

    const valid = await this.userService.login( this.loginUser.email, this.loginUser.password );

    if(valid){
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true})
    }else{
      //Show validate error 
      this.uiService.presentAlert('User and Password are not valid');
    }

    console.log(fLogin.valid);
    console.log (this.loginUser);

  }

  async register(fRegister: NgForm) {

    if(fRegister.invalid){ return; };

    const valid = await this.userService.register(this.registerUser);

    if(valid){
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true})
    }else{
      //Show validate error 
      this.uiService.presentAlert('That user already exists');
    }

    console.log(fRegister.valid);

  }

  selectAvatar(avatar) {

    this.avatars.forEach(ava => ava.seleccionado = false);

    avatar.seleccionado = true;

  }

  showRegister(){

    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);

  }

  showLogin(){

    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);

  }

}
