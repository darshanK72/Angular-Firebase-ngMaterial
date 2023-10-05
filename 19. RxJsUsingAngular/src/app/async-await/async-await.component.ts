import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit{

  myPromise!:Promise<string>;
  message!:string;

  ngOnInit(): void {
    this.myPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('promise is resolved');
      }, 3000);
    });

    this.asyncFun();
  }

  async asyncFun(){
    this.message = await this.myPromise;
    console.log(this.message);
  }

}
