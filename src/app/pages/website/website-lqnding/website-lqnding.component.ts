import { Component } from '@angular/core';
import { MasterServiceService } from 'src/app/master-service.service';

@Component({
  selector: 'app-website-lqnding',
  templateUrl: './website-lqnding.component.html',
  styleUrls: ['./website-lqnding.component.scss']
})
export class WebsiteLqndingComponent {
  loggedUserData: any;
  registerObj:any = {
    "name": "",
    "mobileNo": "",
    "email": "",
    "city": "",
    "address": "",
    "password": ""
  };
  loginObj: any ={
    "email": "string",
    "password": "string"
  }
  constructor(private master:MasterServiceService){
    const isLocal = localStorage.getItem('flightCustomer');
    if(isLocal != null) {
      this.loggedUserData = JSON.parse(isLocal);
    }
  }

  logff() {
    localStorage.removeItem('flightCustomer')
    this.loggedUserData =  undefined;
    }
  onSave() {
    this.master.register(this.registerObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Resgister Success');
        this.closeRegister()
      } else {
        alert(res.message);
      }
    })
  }
  onLogin() {
    this.master.login(this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Login Success');
        this.loggedUserData = res.data;
        localStorage.setItem('flightCustomer', JSON.stringify(res.data));
        this.closeLogin()
      } else {
        alert(res.message);
      }
    })
  }

  openRegister() {
    const model = document.getElementById('registerModel');
    if(model != null) {
      model.style.display = "block"
    }
  }
  closeRegister() {
    const model = document.getElementById('registerModel');
    if(model != null) {
      model.style.display = "none"
    }
  }

  openLogin() {
    const model = document.getElementById('loginModel');
    if(model != null) {
      model.style.display = "block"
    }
  }
  closeLogin() {
    const model = document.getElementById('loginModel');
    if(model != null) {
      model.style.display = "none"
    }
  }
}