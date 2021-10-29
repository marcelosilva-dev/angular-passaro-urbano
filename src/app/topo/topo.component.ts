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
  public ofertas2: Oferta[];
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
        console.log(err);
        return Observable.of<Oferta[]>([]);
      });

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => (this.ofertas2 = ofertas),
      (erro: any) => console.log(erro),
      () => console.log("Fluxo de eventos completo")
    );
  }

  public pesquisa(busca: string) {
    this.subjectPesquisa.next(busca);
    /*
    this.ofertas = this.ofertasService.pesquisaOfertas(busca);

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log(erro),
      () => console.log("Fluxo de eventos completo")
    );
    */
  }
}
