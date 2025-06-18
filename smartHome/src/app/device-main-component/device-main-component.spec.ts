import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMainComponent } from './device-main-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeviceMainComponent', () => {
  let component: DeviceMainComponent;
  let fixture: ComponentFixture<DeviceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceMainComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
