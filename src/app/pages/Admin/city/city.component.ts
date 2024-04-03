import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit{
 cityList: any [] = [[1,'Tunis'],[2,'Sfax']];
 constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getAllCity();
  }
  getAllCity(){
    //this.http.get('https:/').Subscribe((res:any)=>{
      //this.cityList=res.data;
    }//)  }


    addNew(){

    }
}
