import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationStateService {
  private animationExecutedKey = 'animationExecuted';

  constructor() {}

  checkAnimationState(): boolean {
    const hasExecuted = JSON.parse(
      sessionStorage.getItem(this.animationExecutedKey) || 'false'
    );
    return hasExecuted;
  }

  setAnimationExecutedTrue() {
    sessionStorage.setItem(this.animationExecutedKey, 'true');
  }

  setAnimationExecutedFalse() {
    sessionStorage.setItem(this.animationExecutedKey, 'false');
  }
}
