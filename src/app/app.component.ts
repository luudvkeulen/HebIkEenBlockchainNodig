import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question1 = 'Heb je een database nodig?';
  question2 = 'Moeten verschillende mensen naar de database kunnen schrijven?';
}
