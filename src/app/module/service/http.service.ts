import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public domin: any = 'http://yuqing.itying.com/api/'
  constructor(public http: HttpClient) { }

  get(api:string){
    return new Observable(res=>{
      this.http.get(this.domin+api).subscribe(
        val=>{res.next(val)},
      )
    })
  }
  post(api:string,paremeter:any){
    return new Observable(res=>{
      this.http.post(this.domin+api,paremeter).subscribe(val=>{
        res.next(val)
        console.log(paremeter)
      })
    })
  }



}
