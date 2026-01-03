import { Routes } from '@angular/router';
import { Contact } from './componenti/contact/contact';
import { Contatto } from './componenti/contatto/contatto';
import { About } from './componenti/about/about';
import { Home } from './componenti/home/home';
import { authGuard } from './auth/auth-guard';
import { adminGuard } from './auth/admin-guard';

export const routes: Routes = [ //Imported in main.ts
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to 'home'. pathMatch: 'full' ensures the entire URL matches
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'contact', component: Contact, canMatch: [authGuard],
    children: [
      { path: ':id', component: Contatto, canMatch: [adminGuard] } // Nested route to handle 'id' parameter
    ]
  },
  { path: '**', redirectTo: '/home' }, // Wildcard route redirects to 'home' for any undefined paths
  //{ path: 'contact/:id', component: Contact } // Route with parameter 'id'
];
