import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() tab:any={name:"",active:true}
  @Output() changeEvent:EventEmitter<string>=new EventEmitter()
  constructor(private dataService:DataService){}


  change() {
    this.dataService.active=this.tab.name
    console.log(this.dataService.active)
    this.changeEvent.emit(this.tab.name)
  }

}
