import { TestBed } from '@angular/core/testing';

import { Schedule, ScheduleResponseDTO, ScheduleService } from './schedule-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Device } from './device-service';

describe('ScheduleService', () => {
  let service: ScheduleService;
  let httpMock: HttpTestingController;

  const dummy: Schedule = {
    scheduleId: 1,
    deviceId: 1,
    action: 'sweep the area',
    scheduleTime: '10am to 1pm'
  }

  const dummy1: Schedule = {
    scheduleId: 2,
    deviceId: 1,
    action: 'wipe the area',
    scheduleTime: '11am to 2pm'
  }

  const dummydevice : Device = {
    deviceId: 1,
    name: 'CleaningBot',
    type: 'AUTO',
    room: 'Livingroom',
    status: 'Active',
    deviceCategory : {
      categoryId : 1
    }
  }

  const dummyDTO: ScheduleResponseDTO = {
    scheduleId: 1,
    device: dummydevice,
    action: 'sweep the area',
    scheduleTime: '10am to 1pm'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScheduleService]
    });
    service = TestBed.inject(ScheduleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a schedule', () => {
    service.addSchedule(dummy).subscribe((res) => {
      expect(res).toEqual(dummy);
    });

    const req = httpMock.expectOne(`http://172.24.60.170:8141/schedule/create`);
    expect(req.request.method).toBe('POST');
    req.flush(dummy);
  })


  it('Should get responseDTO', () => {
    const responseId = 1;
    service.getScheduleById(responseId).subscribe((res) => {
      expect(res).toEqual(dummyDTO);
    });

    const req = httpMock.expectOne(`http://172.24.60.170:8141/schedule/${responseId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDTO);

  })

  it('should get schedules by device id', () => {
    const schedules : Schedule[] = [dummy, dummy1];
    const dId = 1;
    service.getSchedulesByDeviceId(dId).subscribe((res) => {
      expect(res.length).toBe(2);
      expect(res).toEqual(schedules);
    })

    const req = httpMock.expectOne(`http://172.24.60.170:8141/schedule/device/${dId}`);
    expect(req.request.method).toBe('GET');
    req.flush(schedules);
    
  })
});
