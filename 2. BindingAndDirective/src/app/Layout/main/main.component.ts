import { Component } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  emp: Employee =
    {
      name: "",
      employeeId: 0,
      salary: 0
    }

  countries: string[] = ["India", "America", "UK", "USA", "Russia"];


  heading: string = "This is Heading of this page using string interpolation";
  title: string = 'FirstAngularApplication';
  message: string = 'This is Sparta, I have Created first application using Angular';
  value: number = 522;
  myval: string = "";

  imgPath: string = "/assets/Mickey_Mouse.png";

  nameval: string = "Darshan Khairnar";
  isDisabled: boolean = true;

  searchvalue1: string = "";
  searchvalue2: string = "defaultvalue";

  public getResult(): string {
    return "this is Result from funciton";
  }

  public typing(eventData: Event) {
    this.searchvalue1 = (<HTMLInputElement>eventData.target).value
    // console.log(eventData);
  }

  public submit(eventData: Event) {
    eventData.preventDefault();
    console.log(this.searchvalue1);
    this.searchvalue1 = "";
  }

  modelChange(arg: any) {
    console.log("Event Value " + arg.target.value);
  }

  name1Changed(arg: any) {
    console.log("name1Changed " + arg.target.value);
    console.log(arg);
  }

  country1Changed(arg: any) {
    console.log("country1Changed " + arg.target.value);
    console.log(arg);
  }

  //planning , execuation, testing, user acceptance, life support & assistance

  customers: Customer[] = [

    { customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India' },
    { customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India' },
    { customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India' },
    { customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India' },

  ]

  operator!: string;
  num1! : number;
  num2! : number;


  // 

  age = 22;
}
