import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent {
  selectedImg: number = 0;

  setSelectedImg(selected: number) {
    this.selectedImg = selected;
  }

  incrementSelected() {
    this.selectedImg++;
    if(this.selectedImg > 2) {
      this.selectedImg = 2;
    }
  }

  decrementSelected() {
    this.selectedImg--;
    if(this.selectedImg < 0) {
      this.selectedImg = 0;
    }
  }

}
