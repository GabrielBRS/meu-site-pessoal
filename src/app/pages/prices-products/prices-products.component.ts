import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../../servicos.service';

@Component({
  selector: 'app-prices-products',
  templateUrl: './prices-products.component.html',
  styleUrls: ['./prices-products.component.scss'],
  providers:[ServicosService]
})
export class PricesProductsComponent implements OnInit {

  routeProducts:any;

  constructor(private servicosService:ServicosService, private route:ActivatedRoute) {
    this.servicosService.getIdService().subscribe(route=>{
      this.routeProducts = route;
    })
  }

  ngOnInit(): void {
    this.setIdRoute();
  }

  setIdRoute(){
    // this.routeParams = this.route.snapshot.params['idp'];
    // this.servicosService.setIdService(this.routeParams);
    setInterval(()=>{
      this.routeProducts= localStorage.getItem('routeProducts')
    },100)
  }

}
