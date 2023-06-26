import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectareaComponent } from './selectarea/selectarea.component';
import { InfoareaComponent } from './infoarea/infoarea.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SharedModule } from '../shared/shared.module';


const dec = [SelectareaComponent,
  InfoareaComponent,
  HeaderComponent,
  MainpageComponent]
@NgModule({
  declarations: [
    dec
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    dec
  ]
})
export class MainModule { }
