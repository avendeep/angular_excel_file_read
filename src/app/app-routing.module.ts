import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';

const routes: Routes = [
  {path:'', redirectTo:'/excel-upload', pathMatch:'full'},
  {path:'excel-upload', component:ExcelUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
