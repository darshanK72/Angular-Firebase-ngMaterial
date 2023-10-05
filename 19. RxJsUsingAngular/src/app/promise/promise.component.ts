import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit{

  myPromse!:Promise<string>;
  isAvalible = true;
  message!:string;

  ngOnInit(){
    this.myPromse = new Promise((resolve,reject) => {

      if(this.isAvalible){
        setTimeout(() => {
          resolve('Promise is resolved');
        }, 3000);
      }
      else{
        reject('Promise is rejected');
      }

    });
  }

  showMessage(){
    this.myPromse.then(data => {
      this.message = data
    }).catch(error => {
      this.message = error
    })
  }
}
