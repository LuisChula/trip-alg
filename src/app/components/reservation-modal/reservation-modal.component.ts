import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent implements OnInit{

  @Input() index!: number;
  @Input() title: string = "Sem titulo";
  @Input() longDescription!: string;
  @Input() commodities!: any[];
  @Input() allImgs!: any[];

  imgs!: any[];

  selectedImg: number = 0;

  start: number = 0;
  end: number = 2;

  ngOnInit(): void {
    this.updateImgs();
  }

  updateImgs() {
    this.imgs = [];
    for(let i = this.start; i <= this.end; i++) {
      this.imgs.push(this.allImgs[i]);
    }
  }

  setSelectedImg(selected: number) {
    this.selectedImg = selected;
  }

  incrementSelected() {
    this.selectedImg++;
    if(this.selectedImg > 2) {
      this.selectedImg = 2;
      this.end++;
      this.start++;
      if (this.end >= this.allImgs.length) {
        this.end--;
        this.start--;
      }
      this.updateImgs();
    }
  }

  decrementSelected() {
    this.selectedImg--;
    if(this.selectedImg < 0) {
      this.selectedImg = 0;
      this.end--;
      this.start--;
      if (this.start < 0) {
        this.end++;
        this.start++;
      }
      this.updateImgs();
    }
  }

}
