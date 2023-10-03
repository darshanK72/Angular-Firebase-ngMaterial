import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './Department/department.component';
import { MainComponent } from './Layout/main/main.component';

const routes: Routes = [
  {path:"main",component:MainComponent},
  {path:"departments",component : DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
