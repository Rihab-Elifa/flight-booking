import { Component } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent {
  passendgerlist: any []= [];

  addNew() {
    const obj = {
      "travelerName": "",
      "contactNo": "",
      "aadharNo": "",
      "seatNo": 0
    };
    this.passendgerlist.unshift(obj)
  }
}