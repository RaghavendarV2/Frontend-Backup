import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHistoryComponent } from './schedule-history-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScheduleHistoryComponent', () => {
  let component: ScheduleHistoryComponent;
  let fixture: ComponentFixture<ScheduleHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleHistoryComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
