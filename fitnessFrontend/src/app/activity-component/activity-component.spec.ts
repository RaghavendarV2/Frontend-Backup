import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
