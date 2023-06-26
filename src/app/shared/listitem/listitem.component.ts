import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { availableArray, injuredArray, bookedArray } from '../../core/mock/boat.mock';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent {
  @Input() boatobj: any = {}

  groupArray:any[]=[]

  constructor(private dataservice: DataService) { }

  sendinfo() {
    this.dataservice.boatdata = Object.assign(this.dataservice.boatdata,this.boatobj);
    console.log("changed")

    
  }

}
