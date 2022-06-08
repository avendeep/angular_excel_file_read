import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { UploadExcelDirective } from './directives/upload-excel.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExcelUploadComponent,
    UploadExcelDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
