import { TestBed } from '@angular/core/testing';
import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if 5 value is passed', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if 10 value is passed', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display strongest if 20 value is passed', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20 (strongest)');
  });

  it('should create an instance from TestBed module', () => {
    TestBed.configureTestingModule({ providers: [StrengthPipe] });
    const pipe = TestBed.inject(StrengthPipe);
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });
});
