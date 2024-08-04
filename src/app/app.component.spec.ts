import { TestBed } from '@angular/core/testing';
import { TestService } from './services/test.service';

describe('AppComponent', () => {
  let service: TestService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('check the service exists', () => {
    expect(service).toBeTruthy();
  });

  it('check the add method exists', () => {
    expect(service.add(1, 2)).toBeTruthy();
  });

  it('check the add method work correctly', () => {
    expect(service.add(1, 2)).toBe(3);
  });

  it('check the add method work correctly with decimals', () => {
    expect(service.add(1.33, 2.3423423)).toBeCloseTo(3.66, 1);
  });
});
