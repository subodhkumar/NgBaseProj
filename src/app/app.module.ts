
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EsTableModule } from './es-table/es-table.module';
import {HttpClientModule} from '@angular/common/http';
import { D3TestModule } from './d3-test/d3-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EsTableModule,
    D3TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
