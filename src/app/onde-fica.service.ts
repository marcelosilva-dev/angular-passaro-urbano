import { OndeFica } from "./shared/onde-fica.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_URL_ONDE_FICA } from "./app.api";
import "rxjs/add/operator/toPromise";
@Injectable()
export class OndeFicaService {
  // private url_api = "http://localhost:3000/ofertas";
  constructor(private http: Http) {}

  public getRegistroPorId(id: number): Promise<OndeFica> {
    return this.http
      .get(`${API_URL_ONDE_FICA}?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json().shift());
  }
}
