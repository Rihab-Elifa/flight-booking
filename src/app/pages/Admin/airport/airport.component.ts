import { Component } from '@angular/core';
import { MasterServiceService } from 'src/app/master-service.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent {
  airportList: any [] = [];
  cityList: any[]=[];

  constructor(private master:MasterServiceService){}
 

  ngOnInit(): void {
    this.loadAirports();
    this.loadCity();
  }
  addNew() {
    const obj = {
      "airportId": 0,
      "airportCode": "",
      "airportName": "",
      "cityId": 0
    };
    this.airportList.unshift(obj);
  }

  loadAirports() {
    this.master.getAllAirport().subscribe((res:any)=>{
      this.airportList = res.data;
    })
  }
  saveAll() {
    this.master.saveAirport(this.airportList).subscribe((res:any)=>{
      if(res.result) {
        alert('Data Updated Success')
      } else {
        alert(res.message);
      }
    })
  }

  loadCity () {
    this.master.getAllCity().subscribe((res:any)=>{
      this.cityList = res.data;
    })
  }

}