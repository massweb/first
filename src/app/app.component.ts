import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jokes = [
    {title: '1', text: '1text'},
    {title: '2', text: '2text'}
  ]
}
