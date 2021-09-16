import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { LocalstoreService } from '../service/localstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store:HttpService, private router:Router, private localStore:LocalstoreService) { }

  ngOnInit(): void {

  }
  ngAfterContentInit(){
    this.displayVerityImag()
  }

public loginData :Login={
  username:"",
  password:"",
  verify:"",
  svgKey:""

}
svgImg:any= ""

  //data

  //methods
  displayVerityImag(){
    let api ="captcha"
    this.store.get(api).subscribe((val:any)=>{
      this.svgImg = val.svgImg
      this.loginData.svgKey=val.svgKey
      let svgDom:any =document.querySelector("#svgImage");
      svgDom.innerHTML=this.svgImg

    })
  }
handleSubmit(){
  let api ="doLogin"
  this.store.post(api,this.loginData).subscribe((res:any)=>{
    // console.log("AA"+res.success)
    if(res.success ==true){
      // console.log("BB"+res.success)
      this.localStore.set('loginAuth',res.result)
      this.router.navigate(['/dashboard'])

    }
    else{
      // console.log("CC"+res.success)
      alert(res.success)
      this.displayVerityImag()
      // this.loginData.svgKey=''
      this.loginData.verify=''

    }

  })
}
}
