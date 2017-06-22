import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { TodoComponent } from './components/todo/todo.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';

import { TodoServices } from './components/todo/todo.service';
import { rootReducer, IAppState } from './store/index';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { VoteFrameworkComponent } from './components/vote-framework/vote-framework.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from "@angular-redux/store/lib/src";


export const firebaseConfig = {
  apiKey: "AIzaSyCKBMtOos2u83zHhIyNZ6kfNhOQ4dRvELo",
  authDomain: "pocdb-4511a.firebaseapp.com",
  databaseURL: "https://pocdb-4511a.firebaseio.com",
  projectId: "pocdb-4511a",
  storageBucket: "pocdb-4511a.appspot.com",
  messagingSenderId: "853754020901"
};

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent,
    TodoComponent,
    CounterComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    VoteFrameworkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard, TodoServices],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
  public store: NgRedux<IAppState>, devTools: DevToolsExtension
  ){
  
  const storeEnhancers = devTools.isEnabled() ?
  [ devTools.enhancer()]:
  [];
  
 //const createLogger = require(`redux-logger`);
 //createLogger({ collapsed: 'true' })
  store.configureStore(
    rootReducer, {}, [  ],storeEnhancers
  );
  }
 }
