import { EndpointService } from './../../services/endpoint.service';
import { Respuesta } from './../../interface/respuesta.interface';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  respuesta!: Respuesta[];
  strBusqueda: string = "";

  constructor(private enpointService: EndpointService) { }

  ngOnInit() {
    this.enpointService.getRaces().pipe(
      tap( res =>{this.respuesta = res.results; })
    ).subscribe();

  }

  buscarRaza($event){
    if(this.strBusqueda != ""){
      this.respuesta.forEach((element,index) => {
        var res = element.name.toLowerCase().includes(this.strBusqueda.trim().toLowerCase());    
        if(!res){
          this.respuesta.splice(index,1);
        }
      });
    }else{
      this.enpointService.getRaces().pipe(
        tap( res =>{this.respuesta = res.results; })
      ).subscribe();
    }
  }

}
