import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVendasComponent } from './consulta-vendas.component';

describe('ConsultaVendasComponent', () => {
  let component: ConsultaVendasComponent;
  let fixture: ComponentFixture<ConsultaVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
