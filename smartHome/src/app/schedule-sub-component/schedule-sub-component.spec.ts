import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSubComponent } from './schedule-sub-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScheduleSubComponent', () => {
  let component: ScheduleSubComponent;
  let fixture: ComponentFixture<ScheduleSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleSubComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
