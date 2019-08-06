import { NgModule } from '@angular/core';
import { EsLibOneComponent } from './es-lib-one.component';
import { D3OneComponent } from './d3-one/d3-one.component';

@NgModule({
  declarations: [EsLibOneComponent, D3OneComponent],
  imports: [
  ],
  exports: [EsLibOneComponent]
})
export class EsLibOneModule { }
