import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.css']
})
export class ExcelUploadComponent implements OnInit {

  excelData=null;

  constructor() { }

  ngOnInit(): void {
  }

  DataFromEventEmitter(data){
    console.log(data)
    this.excelData= data
  }

}