import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './component/home-layout/home-layout.component';
import { ServicepageComponent } from './component/servicepage/servicepage.component';
import { SeopageComponent } from './component/servicepage/seopage/seopage.component';
import { PaidmarketingComponent } from './component/servicepage/paidmarketing/paidmarketing.component';
import { BrandbuildingComponent } from './component/servicepage/brandbuilding/brandbuilding.component';
import { WebdevlopmentComponent } from './component/servicepage/webdevlopment/webdevlopment.component';
import { WorkflowautomationComponent } from './component/servicepage/workflowautomation/workflowautomation.component';
import { MarkersategyComponent } from './component/servicepage/markersategy/markersategy.component';
import { InfluencemarketingComponent } from './component/servicepage/influencemarketing/influencemarketing.component';
import { GoogleadsComponent } from './component/servicepage/googleads/googleads.component';


export const routes: Routes = [
    {path:'', component:HomeLayoutComponent},
    {path:'services', component:ServicepageComponent},
    {path:'seopage', component:SeopageComponent},
    {path:'paidmarketing', component:PaidmarketingComponent},
    {path:'brandbuilding', component:BrandbuildingComponent},
    {path:'webbuilding', component:WebdevlopmentComponent},
    {path:'workflowautomation', component:WorkflowautomationComponent},
    {path:'markersategy', component:MarkersategyComponent},
    {path:'influencemarketing', component:InfluencemarketingComponent},
    {path:'googleads', component:GoogleadsComponent}

];
