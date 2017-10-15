import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: string;
  @Output() result = new EventEmitter<Boolean>();
  disabled: boolean;

  constructor() {
  }

  onYesClicked() {
    this.result.emit(true);
    this.disabled = true;
  }

  onNoClicked() {
    this.result.emit(false);
    this.disabled = true;
  }

}
