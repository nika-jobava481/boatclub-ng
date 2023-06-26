import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemgroupComponent } from './listitemgroup.component';

describe('ListitemgroupComponent', () => {
  let component: ListitemgroupComponent;
  let fixture: ComponentFixture<ListitemgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListitemgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListitemgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
