import { Oferta } from "./shared/oferta.model";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { API_URL_OFERTAS } from "./app.api";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs";
@Injectable()
export class OfertasService {
  // private url_api = "http://localhost:3000/ofertas";
  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get(`${API_URL_OFERTAS}?destaque=true`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${API_URL_OFERTAS}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${API_URL_OFERTAS}?id=${id}`)
      .toPromise()
      .then((resposta: Response) => resposta.json().shift());
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http
      .get(`${API_URL_OFERTAS}?descricao_oferta_like=${termo}`)
      .retry(10)
      .map((resposta: Response) => resposta.json());
  }
}
