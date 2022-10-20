import { Respuesta } from './../interface/respuesta.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private urlMonster = "https://www.dnd5eapi.co";
  private urlRace = "https://www.dnd5eapi.co";

  constructor(private http: HttpClient) { }

  getMonsters(): Observable<any> {

    

    return  this.http.get<Respuesta>(this.urlMonster + "/api/monsters").pipe(
      tap(res => res.results.forEach((element,index) => {
        res.results[index]['capabilities'] = {};
        this.http.get(this.urlMonster + element.url).subscribe(res2=> element.capabilities = res2 );    
      })   
      
      )
    );
  }

  getRaces(): Observable<any> {
    return this.http.get<Respuesta>(this.urlRace + "/api/races").pipe(
      tap(res => res.results.forEach((element,index) => {
        res.results[index]['capabilities'] = {};
        this.http.get(this.urlRace + element.url).subscribe(res2=> element.capabilities = res2 );    
      })   
      
      )
    );
  }



}
