import { Component, NgZone } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.html'
})
export class AppLoginComponent {
  title = 'front-app';

  constructor(
    private router: Router,
    private zone: NgZone) {

    // Used for listening to login events
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "cognitoHostedUI" || event === "signedIn") {
        console.log(event);
        this.zone.run(() => this.router.navigate(['/dashboard']));
      }
    });

    //currentAuthenticatedUser: when user comes to login page again
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      }).catch((err) => {
        console.log(err);
      })
  }

  onLoginClick() {
    Auth.federatedSignIn();
  }
}