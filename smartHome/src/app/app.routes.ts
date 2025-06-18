import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { DeviceMainComponent } from './device-main-component/device-main-component';
import { ScheduleMainComponent } from './schedule-main-component/schedule-main-component';
import { SubDeviceComponent } from './sub-device-component/sub-device-component';
import { DeviceCategoryComponent } from './device-category-component/device-category-component';
import { ScheduleSubComponent } from './schedule-sub-component/schedule-sub-component';
import { ScheduleHistoryComponent } from './schedule-history-component/schedule-history-component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'device-main', component:DeviceMainComponent},
    {path:'schedule-main', component:ScheduleMainComponent},
    {path:'device-sub', component:SubDeviceComponent},
    {path:'device-category', component:DeviceCategoryComponent},
    {path:'schedule-sub', component:ScheduleSubComponent},
    {path:'schedule-history', component: ScheduleHistoryComponent}
];
