import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { HomeComponent } from "./home/home.component";

import { HttpModule } from "@angular/http";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { OfertaComponent } from "./oferta/oferta.component";
import { ComoUsarComponent } from "./oferta/como-usar/como-usar.component";
import { OndeFicaComponent } from "./oferta/onde-fica/onde-fica.component";

import { DescricaoReduzida } from "./util/descricao-reduzida.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(ROUTES)],
  providers: [{ provide: LOCALE_ID, useValue: "pt-Br" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
