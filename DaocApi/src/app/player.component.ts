import { Component, NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';
import { Http, Response } from '@angular/http';
import { Location }                 from '@angular/common';
import 'rxjs/Rx';
@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent {    
    belts: Array<Object>;
    constructor(private itemService: ItemService) {

        console.log("Friends are being called");
      
        itemService.getBelts().subscribe(res => {
            this.belts = res;
        });
    }
    title = 'app';

}
