import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Layout/home/home.component';
import { AutocompleteComponent } from './Components/Pages/autocomplete/autocomplete.component';
import { BadgeComponent } from './Components/Pages/badge/badge.component';
import { ButtonsComponent } from './Components/Pages/buttons/buttons.component';
import { CardComponent } from './Components/Pages/card/card.component';
import { DialogComponent } from './Components/Pages/dialog/dialog.component';
import { MenuComponent } from './Components/Pages/menu/menu.component';
import { ToggleComponent } from './Components/Pages/toggle/toggle.component';

const routes: Routes = [
  {
    path : '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'auto',
    component : AutocompleteComponent
  },
  {
    path : 'badge',
    component : BadgeComponent
  },
  {
    path : 'buttons',
    component : ButtonsComponent
  },
  {
    path : 'toggle',
    component : ToggleComponent
  },
  {
    path : 'menu',
    component : MenuComponent
  },
  {
    path : 'dialog',
    component : DialogComponent
  },
  {
    path : 'card',
    component : CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
