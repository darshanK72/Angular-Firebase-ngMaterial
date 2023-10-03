import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseId!:number;

  constructor(private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params["id"];
    // this.courseId = parseInt(this.route.snapshot.paramMap.get("id") || '');
    // this.route.params.subscribe((data) => {
    //   this.courseId = +data["id"];
    // })

    console.log(this.router.getCurrentNavigation()?.extras.state);
    console.log(history.state);
    this.courseId = history.state.value;

  }

}
