/**
 * Created by Lusai on 6/12/17.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/chatApp" routerLinkActive="active">ChatRx</a>
      <a routerLink="/dynamicLoadComponent" routerLinkActive="active">AdDynamicLoad</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first';
}
