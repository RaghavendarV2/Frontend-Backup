import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDeviceComponent } from './sub-device-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('SubDeviceComponent', () => {
  let component: SubDeviceComponent;
  let fixture: ComponentFixture<SubDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubDeviceComponent, HttpClientTestingModule, FormsModule, CommonModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('create form bindin values', () => {
    const inpDeviceName = fixture.debugElement.query(By.css('input[name="deviceName"]')).nativeElement;
    const inpDeviceType = fixture.debugElement.query(By.css('input[name="deviceType"]')).nativeElement;
    const inpDeviceRoom = fixture.debugElement.query(By.css('input[name="deviceRoom"]')).nativeElement;
    const inpDeviceStatus = fixture.debugElement.query(By.css('input[name="deviceStatus"]')).nativeElement;
    const inpDeviceCatId = fixture.debugElement.query(By.css('input[name="deviceCatId"]')).nativeElement;

    inpDeviceName.value = 'AutoBot';
    inpDeviceName.dispatchEvent(new Event('input'));

    inpDeviceType.value = 'testtype';
    inpDeviceType.dispatchEvent(new Event('input'));

    inpDeviceRoom.value = 'testroom';
    inpDeviceRoom.dispatchEvent(new Event('input'));

    inpDeviceStatus.value = 'teststatus';
    inpDeviceStatus.dispatchEvent(new Event('input'));

    inpDeviceCatId.value = '42';
    inpDeviceCatId.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.newDevice.deviceName).toBe('AutoBot');
    expect(component.newDevice.deviceType).toBe('testtype');
    expect(component.newDevice.deviceRoom).toBe('testroom');
    expect(component.newDevice.status).toBe('teststatus');
    expect(component.newDevice.deviceCategoryId).toBe('42');
  })

  it('call adddevice when dubmitted', () => {
    spyOn(component, 'addDevice');
    const form = fixture.debugElement.query(By.css('form[addForm="ngForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.addDevice).toHaveBeenCalled();
  });

  it('should bind input to searchId for search by ID form', () => {
    const searchInput = fixture.debugElement.query(By.css('form[searchForm="ngForm"] input[name="searchId"]')).nativeElement;
    searchInput.value = '123';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchId).toBe(123);
  });
  
  it('should call searchDevice when search form is submitted', () => {
    spyOn(component, 'searchDevice');
    const form = fixture.debugElement.query(By.css('form[searchForm="ngForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.searchDevice).toHaveBeenCalled();
  });
  
  it('should bind input to catName for filter by category form', () => {
    const catInput = fixture.debugElement.query(By.css('form[filterForm="ngForm"] input[name="catName"]')).nativeElement;
    catInput.value = 'Cleaning';
    catInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.catName).toBe('Cleaning');
  });
  
  it('should call filterByCat when filter form is submitted', () => {
    spyOn(component, 'filterByCat');
    const form = fixture.debugElement.query(By.css('form[filterForm="ngForm"]'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.filterByCat).toHaveBeenCalled();
  });
  
  it('should display filtered devices table when catMatched is true', () => {
    component.catMatched = true;
    component.filtered = [
      {
        deviceId: 1,
        name: 'TestDevice',
        room: 'TestRoom',
        status: 'Active',
        type: 'Sensor',
        deviceCategory: { categoryId: 2, categoryName: 'Cleaning' }
      }
    ];
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('div table tbody tr');
    expect(tableRows.length).toBe(1);
    expect(tableRows[0].textContent).toContain('TestDevice');
  });
  
});
