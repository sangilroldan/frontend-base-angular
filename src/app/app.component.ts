import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-app';

  constructor() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user.attributes);
      })
      .catch(() => console.log("Not signed in"));
  }

  onLogoutClick() {
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}