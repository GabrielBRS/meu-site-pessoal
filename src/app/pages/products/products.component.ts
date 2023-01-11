import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../servicos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:[ServicosService]
})
export class ProductsComponent implements OnInit {

  idService:any;

  constructor(private servicosService:ServicosService) {
    this.servicosService.getIdService().subscribe(x=>{
      this.idService = x;
    })
  }

  ngOnInit(): void {
    // this.setIdService();
  }

  // setIdService(id?:any){
  //   this.servicosService.setIdService(id);
  // }

}
