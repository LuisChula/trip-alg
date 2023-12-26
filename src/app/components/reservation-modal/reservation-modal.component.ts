import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent {

  @Input() index!: number;
  @Input() title: string = "Sem titulo";
  @Input() longDescription!: string;
  @Input() commodities!: any[];

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
