import { TestBed } from '@angular/core/testing';

import { DetailsProductsService } from './details-products.service';

describe('DetailsProductsService', () => {
  let service: DetailsProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
