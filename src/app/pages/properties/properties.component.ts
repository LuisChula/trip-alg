import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  selectedZone: string = "Todos";
  selectedType: string = "Todos";
  selectedTypology: string = "Todos";

  allData: any;
  data: any;

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    this.propertiesService.getProperties().subscribe((result) => {
      this.allData = result;
      this.onDropdownChange();
    });
  }

  onDropdownChange() {    
    this.data = []
    for(let p of this.allData) {
      if((this.selectedZone == "Todos" || p.zone == this.selectedZone)
       && (this.selectedType == "Todos" || p.type == this.selectedType)
       && (this.selectedTypology == "Todos" || p.typology == this.selectedTypology)) {
        this.data.push(p);
      }
    }
  }

}
