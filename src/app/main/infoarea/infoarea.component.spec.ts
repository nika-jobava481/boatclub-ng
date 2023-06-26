import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoareaComponent } from './infoarea.component';

describe('InfoareaComponent', () => {
  let component: InfoareaComponent;
  let fixture: ComponentFixture<InfoareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
