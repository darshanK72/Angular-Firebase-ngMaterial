import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
    })
  }

  navigateToContact(){
    // this.router.navigate(["contact"]);
    // this.router.navigateByUrl('/contact');
    this.router.navigate(['contact',{relativeTo:this.route}]);
  }

  search(element:HTMLInputElement){
    this.router.navigate(['courses'],{queryParams:{search:element.value}});
  }
}
