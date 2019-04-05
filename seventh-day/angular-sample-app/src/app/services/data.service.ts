import { ChatService } from './chat.service';
import { EventEmitter, Injectable } from '@angular/core';
import { RemoteService } from './remote.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cnt: number = 0
  private em: EventEmitter<number> = new EventEmitter()

  constructor(
    private chat: ChatService,
    private remote: RemoteService
  ) {

  }
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
