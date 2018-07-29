import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngwzp-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {
  @Input() tweetsLength: number;
  @Input() displayedColumns: Array<string>;
  @Input() pagedItems: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
