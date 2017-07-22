import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
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
    selectedSlot: number;
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();

    constructor(private itemService: ItemService) {

        console.log("Friends are being called");

        itemService.getBelts().subscribe(res => {
            this.belts = res;
        });

    }

    selected(slot: number) {
        this.selectedSlot = slot;
        this.selectedChange.emit(this.selectedSlot);
    }

    title = 'app';

}
