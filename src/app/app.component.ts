import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);
  }

  resetPomodoro():void {
    //this.isPaused = false;
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  private tick():void {
    if(!this.isPaused) {
      this.buttonLabel = 'Pause';
      if(--this.seconds < 0){
        this.seconds = 59;
        if(--this.minutes < 0){
          this.resetPomodoro();
        }
      }
    }
  }

  togglePause():void {
    this.isPaused = !this.isPaused;
    if(this.minutes < 24 || this.seconds < 59){
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
