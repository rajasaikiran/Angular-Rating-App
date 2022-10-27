import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rating';

  public star = [1, 2, 3, 4, 5];
  public selected = 0;

  public updateRating(rate: any) {
    this.selected = rate;
  }
}
