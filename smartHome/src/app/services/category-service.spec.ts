import { TestBed } from '@angular/core/testing';

import { CategoryService, DeviceCategory } from './category-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController;

  const dummy : DeviceCategory = {
    categoryId: 1,
    categoryName : "Cleaning"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CategoryService]
    });
    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() =>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add via POST', () => {
    service.addDeviceCategory(dummy).subscribe((res) => {
      expect(res).toEqual(dummy);
    });

    const req = httpMock.expectOne('http://172.24.60.170:8140/device/category/create');
    expect(req.request.method).toBe('POST');
    req.flush(dummy);
  });

  it('Should get via GET', () => {
    const categoryId = 1;

    service.getCategoryById(categoryId).subscribe((res) => {
      expect(res).toEqual(dummy);
    });

    const req = httpMock.expectOne(`http://172.24.60.170:8140/device/category/${categoryId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummy);
  })
});
