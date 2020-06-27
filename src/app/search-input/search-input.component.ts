import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  searchInputValue: string;
  constructor() { }

  ngOnInit(): void {
  }
  handleSearchClick() {

  }
}
