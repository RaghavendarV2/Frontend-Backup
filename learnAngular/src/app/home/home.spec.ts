import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Home', () => {
  let component: Home;  
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test greet msg', () => {
    const heading = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toBe(' im testing ');
  })
});
