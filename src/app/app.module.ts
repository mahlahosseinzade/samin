import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FilterComponent } from './filter/filter.component';
import { SearchPipe } from './filter/search.pipe';
//@Pipe/@Directive/@Component
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchPipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
