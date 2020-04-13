import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: TutorialsListComponent, canActivate: [AuthGuard] },
  { path: 'tutorials/:id', component: TutorialDetailsComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddTutorialComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
