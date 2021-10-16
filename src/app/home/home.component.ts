import { Component, OnInit } from "@angular/core";
import { OfertasService } from "app/ofertas.service"; //permite decorar a class, fazendo se tornar em um componente Angular
import { Oferta } from "app/shared/oferta.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();

    this.ofertasService
      .getOfertas2()
      .then((arraydeofertas: Oferta[]) => {
        this.ofertas = arraydeofertas;
      })
      .catch((e) => console.log(e));
  }
}
