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
    constructor(private itemService: ItemService) {

        itemService.getChests().subscribe(res => {
            this.chests = res;
        });
        itemService.getHelms().subscribe(res => {
            this.helms = res;
        });
        itemService.getArms().subscribe(res => {
            this.arms = res;
        });
        itemService.getHands().subscribe(res => {
            this.hands = res;
        });
        itemService.getLegs().subscribe(res => {
            this.legs = res;
        });
        itemService.getBoots().subscribe(res => {
            this.boots = res;
        });
        itemService.getNecks().subscribe(res => {
            this.necks = res;
        });
        itemService.getMythirians().subscribe(res => {
            this.myths = res;
        });
        itemService.getCloaks().subscribe(res => {
            this.cloaks = res;
        });
        itemService.getJewels().subscribe(res => {
            this.jewels = res;
        });
        itemService.getBelts().subscribe(res => {
            this.belts = res;
        });
        itemService.getRings().subscribe(res => {
            this.rings = res;
        });
        itemService.getBracers().subscribe(res => {
            this.bracers = res;
        });
        itemService.getOneHanders().subscribe(res => {
            this.oneHands = res;
        });
        itemService.getLeftHand().subscribe(res => {
            this.leftHands = res;
        });
        itemService.getTwoHanders().subscribe(res => {
            this.twoHands = res;
        });
        itemService.getRanged().subscribe(res => {
            this.ranged = res;
        });
    }
    title = 'app';

}
