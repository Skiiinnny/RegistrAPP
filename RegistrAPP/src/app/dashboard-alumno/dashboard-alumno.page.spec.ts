import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashboardAlumnoPage } from './dashboard-alumno.page';

describe('DashboardAlumnoPage', () => {
  let component: DashboardAlumnoPage;
  let fixture: ComponentFixture<DashboardAlumnoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAlumnoPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('El componente ActivateQR es creado.', () => {
    expect(component).toBeTruthy();
  });

  it('Se muestra nombre de usuario en bienvenida:', () => {
    let dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector("#bienvenida")).toContain(component.data.nombre_usuario);
  });
});
