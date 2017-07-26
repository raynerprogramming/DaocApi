import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';
import { Http, Response } from '@angular/http';
import { Location }                 from '@angular/common';

import 'rxjs/Rx';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    equipped: Array<Item> = [];
    selectedSlot: number;
    selectedRealm: number;

    default: Item;

    items: Array<Array<Object>> = [];
    
    chests: Array<Object>;
    helms: Array<Object>;
    arms: Array<Object>;
    hands: Array<Object>;
    legs: Array<Object>;
    boots: Array<Object>;
    necks: Array<Object>;
    myths: Array<Object>;
    cloaks: Array<Object>;
    jewels: Array<Object>;
    belts: Array<Object>;
    rings: Array<Object>;
    bracers: Array<Object>;
    oneHands: Array<Object>;
    leftHands: Array<Object>;
    twoHands: Array<Object>;
    ranged: Array<Object>;
    name: string = "Ringo";
    names: string[] = ["John", "Paul", "George", "Ringo"]

    constructor(private itemService: ItemService) {

        itemService.getChests().subscribe(res => {
            this.items[0] = res;
            this.chests = res;
            this.default = this.chests[0] as Item;
        });
        itemService.getHelms().subscribe(res => {
            this.items[1] = res;
            this.helms = res;
        });
        itemService.getArms().subscribe(res => {
            this.items[2] = res;
            this.arms = res;
        });
        itemService.getHands().subscribe(res => {
            this.items[3] = res;
            this.hands = res;
        });
        itemService.getLegs().subscribe(res => {
            this.items[4] = res;
            this.legs = res;
        });
        itemService.getBoots().subscribe(res => {
            this.items[5] = res;
            this.boots = res;
        });
        itemService.getNecks().subscribe(res => {
            this.items[6] = res;
            this.necks = res;
        });
        itemService.getMythirians().subscribe(res => {
            this.items[18] = res;
            this.myths = res;
        });
        itemService.getCloaks().subscribe(res => {
            this.items[7] = res;
            this.cloaks = res;
        });
        itemService.getJewels().subscribe(res => {
            this.items[8] = res;
            this.jewels = res;
        });
        itemService.getBelts().subscribe(res => {
            this.items[9] = res;
            this.belts = res;
        });
        itemService.getRings().subscribe(res => {
            this.items[10] = res;
            this.items[11] = res;
            this.rings = res;
        });
        itemService.getBracers().subscribe(res => {
            this.items[12] = res;
            this.items[13] = res;
            this.bracers = res;
        });
        itemService.getOneHanders().subscribe(res => {
            this.items[14] = res;
            this.oneHands = res;
        });
        itemService.getLeftHand().subscribe(res => {
            this.items[15] = res;
            this.leftHands = res;
        });
        itemService.getTwoHanders().subscribe(res => {
            this.items[16] = res;
            this.twoHands = res;
        });
        itemService.getRanged().subscribe(res => {
            this.items[17] = res;
            this.ranged = res;
        });


    }

    getRealmItems(baseItems:Item[]) {
        return baseItems.filter(x=> x.realm == this.selectedRealm);
    }

    changeSelected($event) {
        this.selectedSlot = $event;
        console.log($event);
    }
    changeRealm($event) {
        this.selectedRealm = $event;
        console.log($event);
    }


    title = 'app';

}
