import {Component, inject} from '@angular/core';
import {FusionAuthService} from '@fusionauth/angular-sdk';
import {filter, of, switchMap} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private fusionAuthService: FusionAuthService = inject(FusionAuthService);

  isLoggedIn: boolean = this.fusionAuthService.isLoggedIn();

  user$ = of(this.isLoggedIn)
    .pipe(
      filter((loggedIn) => loggedIn),
      switchMap(() => this.fusionAuthService.getUserInfo())
    );
}
