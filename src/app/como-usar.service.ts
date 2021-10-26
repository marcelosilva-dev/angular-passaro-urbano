import { ComoUsar } from "./shared/como-usar.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_URL_COMO_USAR } from "./app.api";
import "rxjs/add/operator/toPromise";
@Injectable()
export class ComoUsarService {
  // private url_api = "http://localhost:3000/ofertas";
  constructor(private http: Http) {}

  public getRegistroPorId(id: number): Promise<ComoUsar> {
    return this.http
      .get(`${API_URL_COMO_USAR}?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json().shift());
  }
}
