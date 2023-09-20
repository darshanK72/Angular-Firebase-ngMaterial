import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveRegisterComponent } from './Components/reactive-register/reactive-register.component';
import { TemplateRegisterComponent } from './Components/template-register/template-register.component';

const routes: Routes = [
  { path: 'template', component: TemplateRegisterComponent },
  { path: 'reactive', component: ReactiveRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
