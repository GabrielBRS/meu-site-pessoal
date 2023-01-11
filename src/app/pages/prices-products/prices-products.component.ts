import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../servicos.service';

@Component({
  selector: 'app-prices-products',
  templateUrl: './prices-products.component.html',
  styleUrls: ['./prices-products.component.scss'],
  providers:[ServicosService]
})
export class PricesProductsComponent implements OnInit {

  constructor(private servicosService:ServicosService) { }

  ngOnInit(): void {
  }

}
