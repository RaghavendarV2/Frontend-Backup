import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos } from './todos';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Todos', () => {
  let component: Todos;
  let fixture: ComponentFixture<Todos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todos, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
