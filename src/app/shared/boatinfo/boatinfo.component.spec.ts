import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatinfoComponent } from './boatinfo.component';

describe('BoatinfoComponent', () => {
  let component: BoatinfoComponent;
  let fixture: ComponentFixture<BoatinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
