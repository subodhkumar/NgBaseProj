import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3TestComponent } from './d3-test/d3-test.component';

@NgModule({
  declarations: [D3TestComponent],
  imports: [
    CommonModule
  ],
  exports:[D3TestComponent]
})
export class D3TestModule { }
