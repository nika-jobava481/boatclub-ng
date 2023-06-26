import { Component } from '@angular/core';
import { availableArray, injuredArray, bookedArray } from '../../core/mock/boat.mock';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-listitemgroup',
  templateUrl: './listitemgroup.component.html',
  styleUrls: ['./listitemgroup.component.scss']
})
export class ListitemgroupComponent {
  boats: any[] = []



  constructor(private dataService: DataService) {

    switch (this.dataService.active) {
      case 'available':
        this.boats = availableArray;

        break;
      case 'booked':
        this.boats = bookedArray;

        break;
      case 'injured':
        this.boats = injuredArray;

        break;
      default:
        break;
    }


  }
}
