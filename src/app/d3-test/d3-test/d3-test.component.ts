import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-test',
  templateUrl: './d3-test.component.html',
  styleUrls: ['./d3-test.component.css']
})
export class D3TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    d3.select('p').style('color','red');
  }

}
