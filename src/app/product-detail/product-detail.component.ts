import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  sub: any;
  product: any;
  id: any;
  detalles = [
    {
      id: 1,
      detalle: 'Industria'
    },
    {
      id: 2,
      detalle: 'Farmacia'
    },
    {
      id: 3,
      detalle: 'Taller'
    }
    ];
  constructor(private activatedroute:ActivatedRoute,
    private router:Router,) { }

  ngOnInit(): void {
    this.sub=this.activatedroute.paramMap.subscribe({next:params => { 
      
    this.id = params.get('id'); 
      
    this.product=this.detalles.find(p => p.id==this.id);    
   }});
  }
  Volver(): void {
    this.router.navigate(['/']);
 }

}
