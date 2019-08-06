import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsTableComponent } from './es-table/es-table.component';

@NgModule({
  declarations: [EsTableComponent],
  imports: [
    CommonModule,
  ],
  exports:[EsTableComponent]
})
export class EsTableModule { }
