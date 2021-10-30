import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ComoUsarService } from "app/como-usar.service";
import { ComoUsar } from "app/shared/como-usar.model";

@Component({
  selector: "app-como-usar",
  templateUrl: "./como-usar.component.html",
  styleUrls: ["./como-usar.component.css"],
  providers: [ComoUsarService],
})
export class ComoUsarComponent implements OnInit {
  public registro: ComoUsar;
  constructor(
    private route: ActivatedRoute,
    private comoUsarService: ComoUsarService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.comoUsarService
        .getRegistroPorId(parametros.id)
        .then((registro: ComoUsar) => {
          this.registro = registro;
          console.log("como usar");
          console.log(registro);
        });
    });
  }
}
