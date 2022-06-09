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
         firstname:(this.checkString(item.firstname)?item.firstname:'INVALID'),
         lastname:(this.checkString(item.lastname)?item.lastname:'INVALID'),
         gender:(this.checkString(item.gender)?item.gender:'INVALID'),
         country:(this.checkString(item.country)?item.country:'INVALID'),
         mobile:(this.checkMobileNum(item.mobile)?item.mobile:'INVALID'),
         pincode:(this.checkPinCode(item.pincode)?item.pincode:'INVALID')
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

  checkString(string:any){
    if(!isNaN(string)){
       return false;
    }else{
      return true;
    }
  }

  checkMobileNum(number:any){
    let mob = /^[1-9]{1}[0-9]{9}$/;
    if (mob.test(number) == false) {
        return false;
    }
    return true;
  }

  checkPinCode(pin){
    return /^(\d{4}|\d{6})$/.test(pin);
  }


}
