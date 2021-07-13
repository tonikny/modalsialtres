import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { IUser } from '../shared/interfaces/interfaces';
import { UsersService } from '../shared/services/users.service';
import { ModalWDataComponent } from './modals/modal-wdata/modal-wdata.component';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: IUser[];

  constructor(
    public popoverController: PopoverController,
    private modalController: ModalController,
    private usersService: UsersService
  ) {}

  ionViewWillEnter() {
    this.usersService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    });
  }

  async presentPopover(ev: any) {
    console.log('ev', ev);

    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async createModalWData(user: IUser) {
    const modal = await this.modalController.create({
      component: ModalWDataComponent,
      componentProps: {
        user
      }
    });
    await modal.present();
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}
