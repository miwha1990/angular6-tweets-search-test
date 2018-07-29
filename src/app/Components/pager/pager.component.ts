import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngwzp-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() pager: any;
  @Output() pageChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  handlePageChange(page: number) {
    this.pageChange.emit(page);
  }

}
