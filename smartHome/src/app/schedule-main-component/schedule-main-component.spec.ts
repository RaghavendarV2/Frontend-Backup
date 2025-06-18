import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMainComponent } from './schedule-main-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScheduleMainComponent', () => {
  let component: ScheduleMainComponent;
  let fixture: ComponentFixture<ScheduleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleMainComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
