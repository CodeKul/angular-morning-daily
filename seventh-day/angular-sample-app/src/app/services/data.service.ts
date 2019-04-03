export class DataService {

  private cnt : number = 0

  inc() {
    return ++this.cnt
  }
  dec() {
    return --this.cnt
  }
}
