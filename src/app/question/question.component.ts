import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Output() result = new EventEmitter<Boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onYesClicked() {
    this.result.emit(true);
  }

  onNoClicked() {
    this.result.emit(false);
  }

}
