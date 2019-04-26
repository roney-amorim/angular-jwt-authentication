import { CadastroClienteComponent } from "./cadastro-cliente.component";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('CadastroComponent', () => {
  let component: CadastroClienteComponent;
  let fixture: ComponentFixture<CadastroClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
