import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() jokes;
  constructor() { }

  ngOnInit() {
  }

  delete(joke) {
    console.log(joke);
    this.jokes.splice(this.jokes.indexOf(joke), 1);
  }
}
