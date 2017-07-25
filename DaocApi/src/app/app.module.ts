import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";
import { AppComponent } from './app.component';
import { ItemSlotComponent } from './item-slot.component';
import { PlayerComponent } from './player.component';
import { BonusComponent } from './bonus.component';
import { ItemListComponent } from './item-list.component';
import { ItemCardComponent } from './item-card.component';
import { ItemService }         from './item.service';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import 'jquery'


@NgModule({
  declarations: [
      AppComponent, ItemSlotComponent, PlayerComponent, BonusComponent, ItemListComponent, ItemCardComponent
  ],
  imports: [
      BrowserModule, HttpModule, MaterializeModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
