import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('Todo', () => {
  let service: TodoService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
