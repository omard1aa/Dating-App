import { Injectable } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  progressRef: NgProgressRef;

  constructor(private progressBar: NgProgress) {
  }

  init() {
    this.progressRef = this.progressBar.ref('progressBar');
  }

  start() {
    this.progressRef.start();
  }

  complete() {
    
    this.progressRef.complete();
  }
  changeProgressColor(color: string) {
    this.progressRef.setConfig({ color: `${color}` });
  }
}
