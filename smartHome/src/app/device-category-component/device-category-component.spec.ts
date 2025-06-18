import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceCategoryComponent } from './device-category-component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeviceCategoryComponent', () => {
  let component: DeviceCategoryComponent;
  let fixture: ComponentFixture<DeviceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceCategoryComponent, FormsModule, CommonModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading "Category Page"', () => {
    const heading = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toContain('Category Page');
  });

  it('should bind input to newCategory.categoryName', () => {
    const input = fixture.debugElement.query(By.css('input[name="categoryName"]')).nativeElement;
    input.value = 'Electronics';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newCategory.categoryName).toBe('Electronics');
  });

  it('should call addCategory() when add form is submitted', () => {
    spyOn(component, 'addCategory');
    const form = fixture.debugElement.query(By.css('form[categoryFrom="ngForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.addCategory).toHaveBeenCalled();
  });

  it('should call getCategoryById() when search form is submitted', () => {
    spyOn(component, 'getCategoryById');
    const form = fixture.debugElement.query(By.css('form[searchForm="ngForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.getCategoryById).toHaveBeenCalled();
  });

  it('should display foundCategory.categoryName when searchAttempted is true', () => {
    component.foundCategory = { categoryId: 1, categoryName: 'TestCat' };
    component.searchAttempted = true;
    fixture.detectChanges();
    const result = fixture.nativeElement.querySelector('div p strong');
    expect(result.textContent).toContain('Category Name:');
    expect(fixture.nativeElement.querySelector('div p').textContent).toContain('TestCat');
  });
});
