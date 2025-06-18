import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe-component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeComponent, FormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test greet msg', () => {
    const heading = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toBe('hello guys!');
  })
});
