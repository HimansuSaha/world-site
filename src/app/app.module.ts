import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from './_modal';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
