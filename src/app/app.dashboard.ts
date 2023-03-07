import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-dashboard ',
  templateUrl: './app.dashboard.html',
  styleUrls: ['']
})
export class AppDashboardComponent {
  user = 'front-app';

  constructor() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user.attributes;
      })
      .catch(() => console.log("Not signed in"));
  }
}