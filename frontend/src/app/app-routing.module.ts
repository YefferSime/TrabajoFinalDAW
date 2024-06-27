import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { HabitatListComponent } from './habitat-list/habitat-list.component';
import { HabitatFormComponent } from './habitat-form/habitat-form.component';

const routes: Routes = [
  { path: 'animals', component: AnimalListComponent },
  { path: 'agregar-animal', component: AnimalFormComponent },
  { path: 'editar-animal/:id', component: AnimalFormComponent },
  { path: 'habitats', component: HabitatListComponent },
  { path: 'agregar-habitat', component: HabitatFormComponent },
  { path: 'editar-habitat/:id', component: HabitatFormComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: '**', redirectTo: '/productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
