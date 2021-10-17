import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { HomeComponent } from "./home/home.component";

import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent, TopoComponent, HomeComponent, RodapeComponent],
  imports: [BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
