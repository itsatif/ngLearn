import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDestComponent } from './ng-dest.component';

describe('NgDestComponent', () => {
  let component: NgDestComponent;
  let fixture: ComponentFixture<NgDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
