import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCreacionComponenteComponent } from './ejemplo-creacion-componente.component';

describe('EjemploCreacionComponenteComponent', () => {
  let component: EjemploCreacionComponenteComponent;
  let fixture: ComponentFixture<EjemploCreacionComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploCreacionComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploCreacionComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
