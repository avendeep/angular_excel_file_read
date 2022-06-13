import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.css']
})
export class ExcelUploadComponent implements OnInit {

  excelData=null;
  validatedData=[];
  isTableValid:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  DataFromEventEmitter(data){
    console.log(data)
    this.excelData= data

    for(let item of this.excelData){
       this.validatedData.push({
         //if the cell is empty in excel sheet then item.<column_name> will be undefined.
         sl_no: (this.checkPositiveInt(item.sl_no)?item.sl_no: {value:item.sl_no, error:'Sl.no shouldn\'t be special/character or -ve number'} ),
         firstname:(this.checkString(item.firstname)?item.firstname:{value:item.firstname, error:'Firstname shouldn\'t contain any special characters or numbers'}),
         lastname:(this.checkString(item.lastname)?item.lastname:{value:item.lastname,error:'Lastname shouldn\'t contain any special characters or numbers'}),
         gender:(this.checkString(item.gender)?item.gender:{value:item.gender, error:'gender shouldn\'t contain any special characters or numbers'}),
         country:(this.checkString(item.country)?item.country:{value:item.country, error:'country shouldn\'t contain any special characters or numbers'}),
         mobile:(this.checkMobileNum(item.mobile)?item.mobile:{value:item.mobile, error:'Mobile number should ony be 10 digits and shouldn\'t be any special character'}),
         pincode:(this.checkPinCode(item.pincode)?item.pincode:{value:item.pincode,error:'pincode should ony be 6 digits and shouldn\'t be any special character'})
       })
    }

    console.log(this.validatedData)
  }

  checkPositiveInt(number:number){
   if(Number.isInteger(number) && number>0){
     return true;
   }else{
     this.isTableValid=false;
     return false;
   }
  }

  checkString(string:any){
    const toStr = String(string)
    const trimmed = toStr.trim()
    let isnum = /^\d+$/.test(trimmed);
    if(isnum){
      this.isTableValid=false;
      return false;
    }else{
      let isSpecialChar = /^[A-Za-z]+$/.test(trimmed);
   ///[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
       if(!isSpecialChar){
        this.isTableValid=false;
         return false;
         
       }else{
        
         return true
       }
    }
  }

  checkMobileNum(number:any){
    let mob = /^[1-9]{1}[0-9]{9}$/;
    if (mob.test(number) == false) {
      this.isTableValid=false
        return false;
    }
    return true;
  }

  checkPinCode(pin:any){
    let pinpattern = /^(\d{4}|\d{6})$/;
    if(pinpattern.test(pin) == false){
      this.isTableValid=false;
      return false;
    }
    return true;
  }


}
