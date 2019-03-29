import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  myName : string
  
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges`)
  }

  ngOnInit() {
    console.log(`ngOnInit`)
  }

  ngDoCheck() {
    console.log(`ngDoCheck`)
  }
  ngAfterContentInit() {
    console.log(`ngAfterContentInit`)
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`)
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit`)
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`)
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy`)
  }
}
