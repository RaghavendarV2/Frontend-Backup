import { TestBed } from '@angular/core/testing';

import { Device, DeviceService } from './device-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DeviceService', () => {
  let service: DeviceService;
  let httpMock : HttpTestingController;

  const dummy : Device = {
    deviceId: 1,
    name: 'CleaningBot',
    type: 'AUTO',
    room: 'Livingroom',
    status: 'Active',
    deviceCategory : {
      categoryId : 1
    }
  }

  const dummy1 : Device = {
    deviceId: 2,
    name: 'WipingBot',
    type: 'AUTO',
    room: 'Livingroom',
    status: 'Active',
    deviceCategory : {
      categoryId : 1
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DeviceService]
    });
    service = TestBed.inject(DeviceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Add via POST', () => {
    service.createDevice(dummy).subscribe((res) => {
      expect(res).toEqual(dummy);
    });

    const req = httpMock.expectOne('http://172.24.60.170:8140/device/create');
    expect(req.request.method).toBe('POST');
    req.flush(dummy);
  })

  it('should Get via GET', () => {
    const deviceId = 1;

    service.getDeviceById(deviceId).subscribe((res) => {
      expect(res).toEqual(dummy);
    });

    const req = httpMock.expectOne(`http://172.24.60.170:8140/device/${deviceId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummy);
  })

  it('Should Get All via Get', () => {
    const devices : Device[] = [dummy];

    service.getAllDevices().subscribe((res) => {
      expect(res.length).toBe(1);
      expect(res).toEqual(devices)
    });

    const req = httpMock.expectOne(`http://172.24.60.170:8140/device/getall`);
    expect(req.request.method).toBe('GET');
    req.flush(devices);
  })

  it('Get devices by Category', () => {
    const filteredDevices : Device[] = [dummy, dummy1];
    const categoryName  = "Cleaning";

    service.getDeviceByCategory(categoryName).subscribe((res) => {
      expect(res.length).toBe(2);
      expect(res).toEqual(filteredDevices);
    });

    const req = httpMock.expectOne(`http://172.24.60.170:8140/device/category/filter/${categoryName}`);
    expect(req.request.method).toBe('GET');
    req.flush(filteredDevices);
  })
});
