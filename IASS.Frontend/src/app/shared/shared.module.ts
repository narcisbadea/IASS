import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { SortModule } from './sort/sort.module';
import { DownloadButtonComponent } from './download-button/download-button.component';



@NgModule({
  declarations: [
    DownloadButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PipesModule,
    SortModule,
    DownloadButtonComponent
  ]
})
export class SharedModule { }
