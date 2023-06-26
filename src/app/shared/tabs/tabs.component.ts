import { Component } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabsArray:any[]=[{name:"available",active:true},{name:"booked",active:false},{name:"injured",active:false}]


  
  handleChange(event:string){
    for(let elem of this.tabsArray){
      elem.active=elem.name===event
    }
  }
}
