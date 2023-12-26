import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data: any;

  constructor(private propertiesService: PropertiesService) {}
  
  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    this.propertiesService.getProperties().subscribe((result) => {
      this.data = [];
      for(let property of result) {
        if(property.isFav) {
          this.data.push(property);
        }
      }
    });
  }

}
