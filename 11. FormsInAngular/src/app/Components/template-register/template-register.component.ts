import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-register',
  templateUrl: './template-register.component.html',
  styleUrls: ['./template-register.component.css']
})
export class TemplateRegisterComponent {

  user!:Object;

  register(myForm: NgForm) {
    console.log(myForm);
    console.log(myForm.value);
    this.user = myForm.value;
    console.log(this.user);
  }

  preSetValues(myForm:NgForm){
    myForm.setValue(this.preValues);
    // myForm.form.patchValue(this.preValues);
  }

  preValues: Object = {
    address: 'Yogayog Ledis Telors\nAnand Nagar, Soygaon\nNear Anganwadi No 6',
    agreeTerms: true,
    city: 'Malegaon',
    dateOfBirth: '2000-12-07',
    firstName: 'Darshan',
    gender: 'male',
    lastName: 'Khairnar',
    middleName: 'Naresh',
    phone: '9834444675',
    state: 'Maharashtra',
    zipcode: '423203',
    email:'darshan@gmail.com'
  };
}
