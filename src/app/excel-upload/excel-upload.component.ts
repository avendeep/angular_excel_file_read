import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.css']
})
export class ExcelUploadComponent implements OnInit {

  excelData=null;
  validatedData=[];

  constructor() { }

  ngOnInit(): void {
  }

  DataFromEventEmitter(data){
    console.log(data)
    this.excelData= data

    for(let item of this.excelData){
       this.validatedData.push({
         sl_no: (this.checkPositiveInt(item.sl_no)?item.sl_no:'INVALID' ),
       })
    }

    console.log(this.validatedData)
  }

  checkPositiveInt(number:number){
   if(Number.isInteger(number) && number>0){
     return true;
   }else{
     return false;
   }
  }

}
