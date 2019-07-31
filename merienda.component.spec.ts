import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriendaComponent } from './merienda.component';

describe('MeriendaComponent', () => {
  let component: MeriendaComponent;
  let fixture: ComponentFixture<MeriendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeriendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeriendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
