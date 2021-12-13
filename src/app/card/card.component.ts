import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  template: '<span [innerHTML]=""></span>',
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  happyTrees = require('bob-ross-lipsum');
  randomText = '';
  renderedText= '';
  userText = '';
  successMatch = false;
  successMatchInTime = false;
  
  constructor() { }
  
  @ViewChild(TimerComponent) child!: TimerComponent;

  startingTimer() {
    if (this.child.running === false) {
      this.child.startTimer();
    }
  }
  onInput(input: string) {
    this.userText = input;
    this.compareSentences();
    if (this.userText === this.randomText && this.child.counter > 1000) {
      this.child.startTimer();
      this.successMatch = true;
    } else if (this.userText === this.randomText && this.child.counter < 1000) {
      this.child.startTimer();
      this.successMatchInTime = true;
    }
  }
  compareSentences() {
    let beforeSanText = '';
    for (let i = 0; i < this.randomText.length; i++) {
      if (this.userText.length < i) {
        beforeSanText += "<span class='black'>" + this.randomText.charAt(i) + "</span>"
        console.log(this.userText.charAt(i));
      } else if (this.userText.charAt(i) === this.randomText.charAt(i)) {
        beforeSanText += "<span class='green'>" + this.randomText.charAt(i) + "</span>"
      } else {
        beforeSanText += "<span class='red'>" + this.randomText.charAt(i) + "</span>"
      }
      this.renderedText = beforeSanText;
    }
  }
  newChallenge() {
    this.randomText = this.happyTrees();
    this.renderedText = this.randomText;
    this.child.clearTimer();
    this.successMatch = false;
    this.successMatchInTime = false;
    this.userText = '';
  }
  ngOnInit(): void {
    this.renderedText = this.happyTrees();
    this.randomText = this.renderedText;
  }
}
