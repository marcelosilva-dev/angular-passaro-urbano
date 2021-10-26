import { Component, OnInit } from "@angular/core"; //permite decorar a class, fazendo se tornar em um componente Angular

@Component({
  selector: "app-topo",
  templateUrl: "./topo.component.html",
  styleUrls: ["./topo.component.css"],
})
export class TopoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public pesquisa(busca: string) {
    console.log(busca);
  }
}
