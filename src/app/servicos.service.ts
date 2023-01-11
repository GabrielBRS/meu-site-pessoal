import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServicosService {

    idService$:Subject<any> = new Subject();
    idRoute$:Subject<any> = new Subject();

    constructor() {

    }

    getIdRoute(){
        return this.idRoute$.asObservable();
    }

    setIdRoute(route:any){
        this.idRoute$.next(route);
    }

    getIdService(){
       return this.idService$.asObservable();
    }

    setIdService(setId:any){
       this.idService$.next(setId);
    }

}
