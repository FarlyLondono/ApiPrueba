import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuarioInactivosComponent } from './listar-usuario-inactivos.component';

describe('ListarUsuarioInactivosComponent', () => {
  let component: ListarUsuarioInactivosComponent;
  let fixture: ComponentFixture<ListarUsuarioInactivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUsuarioInactivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuarioInactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
