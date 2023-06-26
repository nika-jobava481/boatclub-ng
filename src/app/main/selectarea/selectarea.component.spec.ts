import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectareaComponent } from './selectarea.component';

describe('SelectareaComponent', () => {
  let component: SelectareaComponent;
  let fixture: ComponentFixture<SelectareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
