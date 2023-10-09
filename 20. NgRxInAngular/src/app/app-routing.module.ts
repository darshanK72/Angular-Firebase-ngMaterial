import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { CounterComponent } from './Components/counter/counter.component';
import { PostComponent } from './Components/post/post.component';

const routes: Routes = [
  {
    path:'',redirectTo:'counter',pathMatch:'full'
  },
  {
    path:'counter',component:CounterComponent
  },
  {
    path: 'blog',component:BlogComponent
  },
  {
    path: 'post',component:PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
