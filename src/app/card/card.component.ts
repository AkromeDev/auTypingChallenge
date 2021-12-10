import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  happyTrees = require('bob-ross-lipsum');
  randomText = this.happyTrees();
  result = 'blablaResult';

  constructor() { }

  @ViewChild(TimerComponent) child: any;

  startingTimer() {
    if (this.child.running === false) {
      this.child.startTimer();
    }
  }

  ngOnInit(): void {
  }

}
