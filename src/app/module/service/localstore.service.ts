import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  constructor() { }
  // get(value:any){
  //   return JSON.parse(localStorage.getItem(value)||'')

  // }

  // set(value:any,key:any){
  //   localStorage.setItem(value,JSON.stringify(key))
  // }

  set(key:any,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }
  get(key:any){
    return JSON.parse(localStorage.getItem(key)|| '{}')
  }
  remove(key:any){
    localStorage.removeItem(key)

  }
}
