import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
productos=[
  {
    id: 1,
    cantidad:3

  },
  {
    id: 2,
    cantidad:2
  },
  {
    id: 3,
    cantidad:5
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
