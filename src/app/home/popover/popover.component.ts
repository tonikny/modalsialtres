import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalComponent } from '../modals/modal/modal.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private modalController: ModalController,
    private popoverController: PopoverController) { }

  ngOnInit() {}

  async createModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    await modal.present();
    this.popoverController.dismiss();
  }

}
