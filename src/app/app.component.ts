import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isAuth: boolean;
   constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      console.log("Auth",auth);
      if (auth) {
      //  this.router.navigateByUrl('/todo');
       this.isAuth=true;
      }else{
        this.isAuth=false;
      }
    });
  }
  
   logOut(){
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
     console.log('Logged out!!!');
     
   }
}
