import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {
  counter!: number;
  timerRef: any;
  running: boolean = false;
  success = true;
  startText = 'Start';

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      console.log(this.counter);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
      console.log(this.counter);
    }
  }

  stopTimer() {
    
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = 0;
    clearInterval(this.timerRef);
    console.log("clearTimer: " + this.counter);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

}