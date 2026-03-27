import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ImprintComponent } from './pages/imprint/imprint';
import { PrivacyComponent } from './pages/privacy/privacy';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'imprint',
        component: ImprintComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    }
];
