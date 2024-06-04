import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';

export const routes: Routes = [
    {path: 'about', loadComponent:() => import('./views/about-page/about-page.component').then(m => m.AboutPageComponent)},
    {path: 'contact', loadComponent:() => import('./views/contact-page/contact-page.component')},
    //{path: 'contact', component: ContactPageComponent},
    {path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)},
    {path: '', component: HomePageComponent},
    {path: '**', redirectTo:'/', pathMatch: 'full'},
];
