import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  runAd: Ad

  constructor() { }

  ngOnInit() {
    this.myObs().subscribe(
      str => console.log(str),
      err => console.log(err),
      () => console.log(`Processing Completed`)
    )

    this.adObs()
  }

  myObs(): Observable<string> {
    return Observable.create((sub: Subscriber<string>) => {
      for (let i = 0; i < 100; i++) {
        sub.next(`${i}`)
        if (i == 100) sub.error(new Error('Maximux limit reached'))
      }
      sub.complete()
    })
  }

  adObs() {
    let ads: Array<Ad> = []
    ads.push(
      {
        img: 'https://ih0.redbubble.net/image.457032641.1770/raf,750x1000,075,t,fafafa:ca443f4786.jpg',
        cmp: 'Angular'
      }
    )

    ads.push(
      {
        img: 'https://fontslogo.com/wp-content/uploads/2013/03/Java-Logo-Font.jpg',
        cmp: 'Java'
      }
    )

    ads.push(
      {
        img: 'https://ih0.redbubble.net/image.495516789.9717/flat,550x550,075,f.jpg',
        cmp: 'PHP'
      }
    )
    interval(1000).subscribe(tick => {
      console.log(`Tick is ${tick}`)

      let ind = Math.floor(Math.random() * 3)
      console.log(`Random index ${ind}`)
      this.runAd = ads[ind]
    })
  }
}

export interface Ad {
  img: string,
  cmp: string
}
