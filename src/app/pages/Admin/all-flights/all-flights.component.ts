import { Component } from '@angular/core';
import { MasterServiceService } from 'src/app/master-service.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.scss']
})
export class AllFlightsComponent {
  flightList: any [] = [];

  constructor(private master: MasterServiceService){}

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights() {
    this.master.getAllFlights().subscribe((res:any)=>{
      this.flightList = res.data;
    })
  }
}