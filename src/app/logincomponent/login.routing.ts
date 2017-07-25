import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LogincomponentComponent} from './logincomponent.component';
const routes : Routes  = [
    {
       path: '', redirectTo: 'Login', pathMatch: 'full'
    }, {
        path: 'Login',
          component : LogincomponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule{
}
    