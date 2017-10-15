import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  needsBlockchain: boolean;
  question: number;
  question1 = 'Heb je een database nodig?';
  question2 = 'Moeten verschillende personen naar de database kunnen schrijven?';
  question3 = 'Zijn alle personen die naar de database schrijven vertrouwd?';
  question4 = 'Gebruik je een vertrouwde 3de partij?';

  constructor() {
    this.question = 1;
    this.needsBlockchain = true;
  }

  doesntNeedBlockchain(): void {
    this.needsBlockchain = false;
  }

  buttonClicked(result, reverse: boolean): void {
    if ((!result && !reverse) || (result && reverse)) {
      this.doesntNeedBlockchain();
    } else {
      this.question++;
    }
  }
}
