import { TestBed } from '@angular/core/testing';

import { AddHttp } from './add-http';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AddHttp', () => {
  let service: AddHttp;
  let httpClientSpy: { get: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    httpClientSpy = {
      get: vi.fn(),
    };
    TestBed.configureTestingModule({
      providers: [AddHttp, { provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(AddHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers via HTTP', (done) => {
    service.add(2, 3).subscribe((result) => {
      expect(result).toBe(5);
      done();
    });
  });

  it('should return the sum', () => {
    // Arrange
    const sum = 5;
    const a = 2;
    const b = 3;

    httpClientSpy.get.mockReturnValue(of(sum));

    // Act + Assert
    service.add(a, b).subscribe((r) => {
      expect(r).toEqual(sum);
    });

    expect(httpClientSpy.get).toHaveBeenCalledOnce();
    // si tu veux vérifier l’URL (comme ton commentaire) :
    // expect(httpClientSpy.get).toHaveBeenCalledWith(`${(service as any).apiUrl}?a=${a}&b=${b}`);
  });
});
