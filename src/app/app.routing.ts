import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
const routes : Routes  = [
    {
        path: '',
        component : HomeComponent
    },
    {
        path: '**',
        component : NotfoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}