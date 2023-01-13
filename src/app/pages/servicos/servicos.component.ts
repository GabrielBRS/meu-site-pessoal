import { AfterContentInit, AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../../servicos.service';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  providers:[ServicosService]
})
export class ServicosComponent implements OnInit{

  routeParams:any;
  routeParamsBoolean:any='false';
  routeServices:any='/1';
  routeProducts:any='/1';

  @ViewChild(ProductsComponent) viewProducts!: ProductsComponent;

  constructor(private route: ActivatedRoute, private servicosService:ServicosService) {
    this.servicosService.getIdRoute().subscribe(route=>{
      this.routeParams = route;
    })
  }

  ngOnInit(): void {
    this.setIdRoute();
    this.setIdService(this.routeServices);
    this.setIdProduct(this.routeProducts);
  }

  setIdRoute(){
    const routeParams = this.route.snapshot.params['id']
    this.servicosService.setIdRoute(routeParams);
    this.routeParams = routeParams;
    localStorage.setItem('routeParams',this.routeParams)
    this.routeParamsBoolean='false';
    localStorage.setItem('routeParamsBoolean',this.routeParamsBoolean)
  }

  setIdService(id:any){
    this.routeServices = id;
    localStorage.setItem('routeServices',this.routeServices)
  }

  setIdProduct(id:any){
    this.routeProducts = id;
    localStorage.setItem('routeProducts',this.routeProducts)

  }

  booleanProduct(){
    this.routeParamsBoolean='true';
    localStorage.setItem('routeParamsBoolean',this.routeParamsBoolean)
  }
}
