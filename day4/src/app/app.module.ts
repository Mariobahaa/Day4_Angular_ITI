import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:"", redirectTo:"students", pathMatch:"full"},
  {path:"students", component:StudentsComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"**", component:ErrorComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
