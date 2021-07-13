import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IUser } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-modal-wdata',
  templateUrl: './modal-wdata.component.html',
  styleUrls: ['./modal-wdata.component.scss'],
})
export class ModalWDataComponent implements OnInit {

  @Input() user: IUser;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
