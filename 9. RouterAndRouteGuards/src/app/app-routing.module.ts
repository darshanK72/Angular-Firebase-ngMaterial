import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CourseDetailComponent } from './Components/course-detail/course-detail.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ServicesComponent } from './Components/services/services.component';
import { authChildGuard } from './Services/auth-child.guard';
import { authGuard } from './Services/auth.guard';
import { deactivateGuard } from './Services/deactivate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,data:{name:"some",val:23}},
  { path: 'about', component: AboutComponent,canActivate:[authGuard]},
  { path: 'courses', component: CoursesComponent,canActivate:[authGuard]},
  {
    path: 'courses',
    children: [{ path: 'course/:id', component: CourseDetailComponent }],
    canActivateChild:[authChildGuard]
  },
  { path: 'services', component: ServicesComponent,canActivate:[authGuard]},
  { path: 'contact', component: ContactComponent,canDeactivate:[deactivateGuard] },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
