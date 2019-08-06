import { Component, OnInit } from '@angular/core';
import { EsLoadUserService } from 'src/app/es-load-user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-es-table',
  templateUrl: './es-table.component.html',
  styleUrls: ['./es-table.component.css']
})
export class EsTableComponent implements OnInit {

  rows = [];
  headers;
  page_counter = 1;
  constructor(public loadService: EsLoadUserService) { 
  }

  loadData(){
    this.loadService.getUserData(this.page_counter).subscribe((data)=>{
      console.log(`DATA FROM SERVICE`);
      console.log(data);
      this.prepareData(data.data)
      console.log(`DATA FROM SERVICE`);
    })
  }
  prepareData(data){
    this.rows = data;
    this.headers = (this.rows.length && Object.keys(this.rows[0]))||[];
  }
  onNextClick(){
    this.page_counter++;
    this.loadData();
  }
  onPrevClick(){
    this.page_counter = this.page_counter>1?this.page_counter-1:0;
    this.loadData();
  }
  ngOnInit() {
    // JQUERY TEST
    $(document).ready(()=>{
      $('div').click(()=>{
        let div = $('div');
        div.animate({left:'100px'},"slow");
        div.animate({fontSize:'24px'},"slow");
      })
    })
    // JQUERY TEST
    
    this.rows = [
      {name:"Name #1",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #2",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #3",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #4",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #5",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #6",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #7",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #8",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
      {name:"Name #9",code:"Code #1",place:"Place #1",email:"name@email.co",contact:"90000123456",fullname:"Full Name #111"},
    ];
    this.loadData();
    
  }

  

}
