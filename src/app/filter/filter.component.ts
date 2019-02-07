import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})

export class FilterComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() { }

  onChange(text) {
    console.log('filter component----', text);
    this.searchEvent.emit(text);
  }
}









