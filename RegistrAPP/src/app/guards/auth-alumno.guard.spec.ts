import { TestBed } from '@angular/core/testing';

import { AuthAlumnoGuard } from './auth-alumno.guard';

describe('AuthAlumnoGuard', () => {
  let guard: AuthAlumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAlumnoGuard);
  });
});
