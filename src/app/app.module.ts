import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormParentComponent } from './form-parent/form-parent.component';
import { FormChildComponent } from './form-child/form-child.component';
import { HttpClientModule } from '@angular/common/http';
import { TablelistComponent } from './tablelist/tablelist.component';
import { EditformComponent } from './editform/editform.component';
import { FillupformComponent } from './fillupform/fillupform.component';



@NgModule({
  declarations: [
    AppComponent,
    FormParentComponent,
    FormChildComponent,
    TablelistComponent,
    EditformComponent,
    FillupformComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
