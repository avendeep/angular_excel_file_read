import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as XLSX from 'xlsx'

@Directive({
  selector: '[appUploadExcel]'
})
export class UploadExcelDirective {
 excelObservable: Observable<any>;
 @Output() eventEmitter = new EventEmitter()

  constructor() { }

@HostListener("change",["$event.target"])
onChange(target:HTMLInputElement){
  const file = target.files[0];
  console.log(file)
   
  this.excelObservable = new Observable((subscriber: Subscriber<any>)=>{
    this.readFile(file, subscriber);
  })
  this.excelObservable.subscribe((data)=>{
    this.eventEmitter.emit(data)
  })
}

readFile(file:File, subscriber:Subscriber<any>){
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file);

  fileReader.onload = (event) =>{
    const bufferArray = event.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bufferArray,{type:'buffer'});
    const wsname:string = wb.SheetNames[0];//fetching workbook sheetname
    const ws:XLSX.WorkSheet = wb.Sheets[wsname];
    const data = XLSX.utils.sheet_to_json(ws);
    subscriber.next(data);
    subscriber.complete();
  }
}

}
