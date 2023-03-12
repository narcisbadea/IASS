import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { SortModule } from './sort/sort.module';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarModule } from './avatar/avatar.module';



@NgModule({
  declarations: [
    DownloadButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PipesModule,
    SortModule,
    DownloadButtonComponent,
    AvatarModule
  ]
})
export class SharedModule { }
