import { Component } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-infoarea',
  templateUrl: './infoarea.component.html',
  styleUrls: ['./infoarea.component.scss']
})
export class InfoareaComponent {
  boat:any;

  constructor(private dataservice:DataService){
    this.boat=this.dataservice.boatdata
  }


}
