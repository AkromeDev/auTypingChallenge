import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  happyTrees = require('bob-ross-lipsum');
  randomText = '';
  userText = '';
  successMatch = false;
  successMatchInTime = false;
  renderedText= '';
  
  constructor() { }
  
  @ViewChild(TimerComponent) child!: TimerComponent;
  // timeNeeded = this.child.counter;

  startingTimer() {
    if (this.child.running === false) {
      this.child.startTimer();
    }
  }
  onInput(input: string) {
    this.renderedText = input;
    this.compareSentences();
    if (this.userText === this.randomText) {
      this.successMatch = true;
      this.child.startTimer();
    }
  }
  compareSentences() {
    for (let i = 0; i < this.randomText.length; i++) {
      if (this.userText.substring(i) === null) {
        this.renderedText += "<span style='background-color:powderblue;'>" + this.randomText.substring(i) + "<span>"
      } else if (this.userText.substring(i) === this.randomText.substring(i)) {
        this.renderedText += "<span style='background-color:powderblue;'>" + this.randomText.substring(i) + "<span>"
      } else {
        this.renderedText += "<span style='background-color:powderblue;'>" + this.randomText.substring(i) + "<span>"
      }
    }
  }
  newChallenge() {
    this.renderedText = this.happyTrees();
    this.child.clearTimer();
    this.successMatch = false;
  }
  ngOnInit(): void {
    this.renderedText = this.happyTrees();
  }
}
