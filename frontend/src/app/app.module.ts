import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { HabitatListComponent } from './habitat-list/habitat-list.component';
import { HabitatFormComponent } from './habitat-form/habitat-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    AnimalListComponent,
    AnimalFormComponent,
    HabitatListComponent,
    HabitatFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
