import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosCartaComponent } from './platos-carta.component';

describe('PlatosCartaComponent', () => {
  let component: PlatosCartaComponent;
  let fixture: ComponentFixture<PlatosCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatosCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
