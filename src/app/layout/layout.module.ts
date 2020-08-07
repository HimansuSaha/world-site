import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchListComponent } from './search-list/search-list.component';



@NgModule({
  declarations: [CountryDetailsComponent, SearchListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CountryDetailsComponent,
    SearchListComponent
  ]
})
export class LayoutModule { }
