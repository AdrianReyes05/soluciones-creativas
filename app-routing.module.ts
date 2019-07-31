import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { ListaComprasComponent } from "./lista-compras/lista-compras.component";
import { ReporteComponent } from "./reporte/reporte.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { PlatosCartaComponent } from "./platos-carta/platos-carta.component";
import { DesayunoComponent } from "./desayuno/desayuno.component";
import { AlmuerzosComponent } from "./almuerzos/almuerzos.component";
import { MeriendaComponent } from "./merienda/merienda.component";

const routes: Routes = [
  { path: "", redirectTo: "p1", pathMatch: "full" },
  { path: "p1", component: HomeComponent },
  { path: "p2", component: LoginComponent },
  { path: "p3", component: FormularioComponent },
  { path: "p4", component: CatalogoComponent },
  { path: "p5", component: ListaComprasComponent },
  { path: "p6", component: ReporteComponent },
  { path: "p7", component: PlatosCartaComponent },
  { path: "p8", component: DesayunoComponent },
  { path: "p9", component: AlmuerzosComponent },
  { path: "p10", component: MeriendaComponent },

  {
    path: "page-not-found",
    loadChildren: "./page-not-found/page-not-found.module#PageNotFoundModule"
  },
  { path: "**", redirectTo: "page-not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
