import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes , RouterModule } from '@angular/router'
// This is imports for components
import { AppComponent } from './app.component';
import { FormParentComponent } from './form-parent/form-parent.component';
import { FormChildComponent } from './form-child/form-child.component';
import { EditformComponent } from './editform/editform.component';
import { FillupformComponent } from './fillupform/fillupform.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes : Routes = [
  {path : '', component: HomeComponent},
  { path : 'dashboard', component: DashboardComponent},
  { path : 'home', component: HomeComponent},
  { path : 'notFound', component: NotFoundComponent},
  { path : 'view/:id', component: ViewComponent},
  { path : '**', redirectTo: 'notFound'}

]

@NgModule({
  declarations: [
    AppComponent,
    FormParentComponent,
    FormChildComponent,
    EditformComponent,
    FillupformComponent,
    HomeComponent,
    NotFoundComponent,
    ViewComponent,
    DashboardComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
