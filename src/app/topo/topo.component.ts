import { Component, OnInit } from "@angular/core"; //permite decorar a class, fazendo se tornar em um componente Angular
import { OfertasService } from "app/ofertas.service";
import { Oferta } from "app/shared/oferta.model";
import { Observable, Subject } from "rxjs";

import "../util/rxjs.extensions";
@Component({
  selector: "app-topo",
  templateUrl: "./topo.component.html",
  styleUrls: ["./topo.component.css"],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((busca: string) => {
        if (busca.trim() === "") {
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(busca);
      })
      .catch((err: any) => {
        return Observable.of<Oferta[]>([]);
      });
  }

  public pesquisa(busca: string) {
    this.subjectPesquisa.next(busca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next("");
  }
}
