import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { HeroeComponent } from "./components/heroe/heroe.component";
import { ListComponent } from "./components/heroe/list/list.component";


@NgModule({
  declarations:[
    HeroeComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroeComponent,
    ListComponent
  ],

})
export class HeroesModule{}
