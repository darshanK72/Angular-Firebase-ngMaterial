import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {

  myForm!:FormGroup;

  ngOnInit():void{
    this.myForm = new FormGroup({
      address: new FormControl('Gurudwara Chouk, Maharashtra',[Validators.required,Validators.maxLength(100),Validators.minLength(20)]),
      agreeTerms: new FormControl(true,Validators.required),
      city: new FormControl('Pune',[Validators.required,this.noSpaceAllowed]),
      dateOfBirth: new FormControl('2003-03-09',Validators.required),
      firstName: new FormControl('Abhishek',[Validators.required,Validators.maxLength(15),Validators.minLength(5),this.noSpaceAllowed]),
      gender: new FormControl('male',Validators.required),
      lastName: new FormControl('Khairnar',[Validators.required,Validators.maxLength(15),Validators.minLength(5),this.noSpaceAllowed]),
      middleName: new FormControl('Naresh',[Validators.required,Validators.maxLength(15),Validators.minLength(5),this.noSpaceAllowed]),
      phone: new FormControl('9383848787',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      state: new FormControl('Maharashtra',Validators.required),
      zipcode: new FormControl('482883',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]),
      email: new FormControl('abhi@gmail.com',[Validators.required,Validators.email]),
      skills:new FormArray([
        new FormControl(null,[Validators.required])
      ])
    });


    this.myForm.valueChanges.subscribe((value)=>{
      console.log(value);
    });

    this.myForm.get("firstName")?.valueChanges.subscribe((value)=>{
      console.log(value);
    });

    this.myForm.statusChanges.subscribe((value)=>{
      console.log(value);
    })
  }

  preSetValues(){
    this.myForm.patchValue({
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
      skills:[
        'java'
      ]
    })
  }

  submitForm(){
    console.log(this.myForm);
    console.log((this.myForm.get('skills') as FormArray).controls);
  }

  addSkill(){
    (<FormArray>this.myForm.get('skills')).push(new FormControl(null,[Validators.required]));
  }

  removeSkill(){
    let fa = <FormArray>this.myForm.get('skills');
    fa.removeAt(fa.length-1);
  }

  getArrayControls(){
    return (this.myForm.get('skills') as FormArray).controls;
  }

  noSpaceAllowed(control:AbstractControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed:true};
    }
    return null;
  }

  reset(){
    this.myForm.reset();
  }
}
