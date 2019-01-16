import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() joke;
  @Output() deleteOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('run component', this.joke.title);
  }

  delete() {
    this.deleteOutput.emit(this.joke);
  }

}
