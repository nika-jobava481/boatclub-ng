import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListitemComponent } from './listitem/listitem.component';
import { ListitemgroupComponent } from './listitemgroup/listitemgroup.component';
import { SearchComponent } from './search/search.component';
import { BoatinfoComponent } from './boatinfo/boatinfo.component';
import { TagsComponent } from './tags/tags.component';
import { TagComponent } from './tag/tag.component';
import { ListComponent } from './list/list.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';


const dec=[
  ListitemComponent,
  ListitemgroupComponent,
  SearchComponent,
  BoatinfoComponent,
  TagsComponent,
  TagComponent,
  ListComponent,
  TabComponent,
  TabsComponent
]
@NgModule({
  declarations: [
    dec,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    dec
  ]
})
export class SharedModule { }
