import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OndeFica } from "app/shared/onde-fica.model";
import { OndeFicaService } from "app/onde-fica.service";

@Component({
  selector: "app-onde-fica",
  templateUrl: "./onde-fica.component.html",
  styleUrls: ["./onde-fica.component.css"],
  providers: [OndeFicaService],
})
export class OndeFicaComponent implements OnInit {
  public registro: OndeFica;
  constructor(
    private route: ActivatedRoute,
    private ondeFicaService: OndeFicaService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ondeFicaService
        .getRegistroPorId(parametros.id)
        .then((registro: OndeFica) => {
          this.registro = registro;
          console.log("onde fica");
          console.log(registro);
        });
    });
  }
}
