import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { CounterComponent } from './Components/counter/counter.component';

const routes: Routes = [
  {
    path:'',redirectTo:'counter',pathMatch:'full'
  },
  {
    path:'counter',component:CounterComponent
  },
  {
    path: 'blog',component:BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
