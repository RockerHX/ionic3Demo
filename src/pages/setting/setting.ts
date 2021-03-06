import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public modalCtrl: ModalController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logout() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
