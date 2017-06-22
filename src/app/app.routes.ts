import { VoteFrameworkComponent } from './components/vote-framework/vote-framework.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { TodoComponent } from './components/todo/todo.component';



export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login-email', component: EmailComponent},
    { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
    { path: 'scroll', component: InfiniteScrollComponent, canActivate: [AuthGuard] },
    { path: 'counter', component: CounterComponent, canActivate: [AuthGuard]},
    { path: 'vote-framework', component: VoteFrameworkComponent, canActivate: [AuthGuard]}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);