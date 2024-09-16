import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServicosService } from '../../servicos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:[ServicosService]
})
export class ProductsComponent implements OnInit{

  routeParams:any=undefined;
  routeProducts:any=undefined;
  routeParamsBoolean:any=undefined;

  constructor(private route:ActivatedRoute,private servicosService:ServicosService) {
    // this.servicosService.getIdService().subscribe(route=>{
    //   this.routeParams = route;
    // })
  }

  ngOnInit(): void {
    this.setIdRoute();
  }

  setIdRoute(){
    setInterval(()=>{
      this.routeProducts = localStorage.getItem('routeProducts');
      this.routeParams = localStorage.getItem('routeParams');
      this.routeParamsBoolean = localStorage.getItem('routeParamsBoolean');
    },100)
  }

}
