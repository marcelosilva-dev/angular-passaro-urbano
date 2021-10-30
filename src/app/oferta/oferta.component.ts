import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Oferta } from "app/shared/oferta.model";
import { OfertasService } from "app/ofertas.service";
import { Observable } from "rxjs";
import { Observer } from "rxjs/Observer";
import "rxjs/Rx";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;
  constructor(
    private ofertaService: OfertasService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertaService
        .getOfertasPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
    });

    // METODO SNAPSHOT
    /*
    if (this.route.snapshot.params["id"]) {
      this.ofertaService
        .getOfertasPorId(this.route.snapshot.params["id"])
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
    }
    */
    // METODO SUBSCRIBE
    // this.route.params.subscribe((parametro: any) => {
    //  console.log(parametro);
    // });

    /*
    let tempo = Observable.interval(500);

    tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });
    */

    //observable (observável)
    /*
    let myObservableTest = Observable.create((observer: Observer<string>) => {
      observer.next("Primeiro evento da stream"),
        observer.next("Segundo evento da stream"),
        observer.complete();
    });

    //observable (observador)
    myObservableTest.subscribe(
      (resultado: any) => console.log(resultado),
      (erro: string) => console.log(erro),
      () => console.log("sucesso")
    );
    */
  }
}
