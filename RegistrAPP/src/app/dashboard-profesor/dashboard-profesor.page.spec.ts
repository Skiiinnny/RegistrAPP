import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardProfesorPage } from './dashboard-profesor.page';

describe('DashboardProfesorPage', () => {
  let component: DashboardProfesorPage;
  let fixture: ComponentFixture<DashboardProfesorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardProfesorPage);
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
