import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../../servicos.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  providers:[ServicosService]
})
export class ServicosComponent implements OnInit {

  routeParams:any;
  routeServices:any;

  constructor(private route: ActivatedRoute, private servicosService:ServicosService) {
    this.servicosService.getIdRoute().subscribe(route=>{
      this.routeParams = route;
    })
  }

  ngOnInit(): void {
    this.setIdRoute();
    this.setIdService();
  }

  setIdRoute(){
    const routeParams = this.route.snapshot.params['id']
    this.servicosService.setIdRoute(routeParams);
  }

  setIdService(id?:any){
    this.routeServices = id;
    this.servicosService.setIdService(this.routeServices);
  }

}
