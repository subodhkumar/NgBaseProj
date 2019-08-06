import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3OneComponent } from './d3-one.component';

describe('D3OneComponent', () => {
  let component: D3OneComponent;
  let fixture: ComponentFixture<D3OneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3OneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
