import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/index';
import { Form1Step2Component } from './form1-step2/index';




const appRoutes: Routes = [
    { path: 'form1', component: Form1Component },
    { path: 'form1-step2', component: Form1Step2Component },
    
    //otherwise
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);