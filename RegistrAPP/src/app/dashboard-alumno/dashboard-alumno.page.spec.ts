import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardAlumnoPage } from './dashboard-alumno.page';

describe('DashboardAlumnoPage', () => {
  let component: DashboardAlumnoPage;
  let fixture: ComponentFixture<DashboardAlumnoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAlumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se muestra nombre de usuario en bienvenida:', () => {
    let dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector("#bienvenida")).toContain(component.data.nombre_usuario);
  });
});
