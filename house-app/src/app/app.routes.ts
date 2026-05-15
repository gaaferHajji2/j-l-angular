import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

export const routes: Routes = [
    {
        'path': '',
        'component': Home,
        'title': 'House Application',
    },
    {
        'path': '/details/:id',
        'component': Details,
        'title': 'House Details'
    }
];
