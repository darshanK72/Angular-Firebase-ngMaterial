import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  numberList = [1,2,3,4,5,6,7,8];
  queryParameters:string[][]=[];

  temp = {value:23};

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    for(let param of Object.entries(this.route.snapshot.queryParams)){
      this.queryParameters.push(param);
    }

    console.log(Object.entries(this.route.snapshot.queryParams));

    console.log(this.queryParameters);
  }

  getCourseDetail(id:number){
    this.router.navigate(['courses/course',id]);
  }

}
