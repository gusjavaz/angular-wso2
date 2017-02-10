import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

export const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'public'},
    {path: 'public', component: PublicComponent},
    {path: 'private', component: PrivateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
