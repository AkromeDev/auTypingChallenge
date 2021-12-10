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
  result = 'blablaResult';
  
  constructor() { }
  
  @ViewChild(TimerComponent) child!: TimerComponent;
  
  startingTimer() {
    if (this.child.running === false) {
      this.child.startTimer();
    }
  }
  
  onInput(input: string) {
    this.userText = input;
  }

  newChallenge() {
    this.randomText = this.happyTrees();
  }
  
  ngOnInit(): void {
    this.randomText = this.happyTrees();
  }
  
}
