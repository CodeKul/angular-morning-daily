import { EventEmitter } from '@angular/core';
export class DataService {

  private cnt: number = 0
  private em: EventEmitter<number> = new EventEmitter()

  inc() {
    return ++this.cnt
  }
  dec() {
    return --this.cnt
  }

  incEm() {
    this.em.emit(++this.cnt)
  }
  decEm() {
    this.em.emit(--this.cnt)
  }

  onProgress(cb: (prg: number) => void) {
    this.em.subscribe(cnt => cb(cnt))
  }
}
