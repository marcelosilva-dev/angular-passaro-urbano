import { Oferta } from "./shared/oferta.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_URL_OFERTAS } from "./app.api";
import "rxjs/add/operator/toPromise";
@Injectable()
export class OfertasService {
  // private url_api = "http://localhost:3000/ofertas";
  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get(`${API_URL_OFERTAS}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${API_URL_OFERTAS}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${API_URL_OFERTAS}?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json().shift());
  }
}
