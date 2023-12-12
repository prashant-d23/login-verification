import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

   userName = '';

   getData(){
    return this.userName;
   }
   setData(uName:string){
    this.userName = uName;
   }

}
