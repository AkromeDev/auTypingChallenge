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
  
  constructor() { }
  
  @ViewChild(TimerComponent) child!: TimerComponent;
  
  startingTimer() {
    if (this.child.running === false) {
      this.child.startTimer();
    }
  }
  
  onInput(input: string) {
    this.userText = input;
    if (this.userText === this.randomText) {
      this.successMatch = true;
      this.child.startTimer();
    }
  }

  compareSentences(userSentence: string) {
    for (let i = 0; i < userSentence.length; i++) {
      if (userSentence.substring(i) === this.randomText.substring(i)) {
        
      }
    }
  }

  newChallenge() {
    this.randomText = this.happyTrees();
    this.child.clearTimer();
    this.successMatch = false;
  }
  
  ngOnInit(): void {
    this.randomText = this.happyTrees();
  }


  
}
