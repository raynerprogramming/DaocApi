import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service'
import { Item } from './item'
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Component({
    selector: 'app-root',
    template: `<h1>My Friends</h1>
    <ul>Belts
      <li *ngFor="let item of belts">
          {{item.name}}
          <ul>
            <li *ngFor="let bonus of item.mappedBonuses">
            <span *ngIf="bonus!=null">{{bonus.Text}}: {{bonus.Value}}</span>
            </li>
          </ul>
      </li>
    </ul>
<ul>Rings
      <li *ngFor="let item of rings">
          {{item.name}}
          <ul>
            <li *ngFor="let bonus of item.mappedBonuses">
            <span *ngIf="bonus!=null">{{bonus.Text}}: {{bonus.Value}}</span>
            </li>
          </ul>
      </li>
    </ul>
    `,
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

        console.log("Friends are being called");

        itemService.getChests().subscribe(res => {
            this.chests = res;
            console.log(this.chests);
        });
        itemService.getHelms().subscribe(res => {
            this.helms = res;
            console.log(this.helms);
        });
        itemService.getArms().subscribe(res => {
            this.arms = res;
            console.log(this.arms);
        });
        itemService.getHands().subscribe(res => {
            this.hands = res;
            console.log(this.hands);
        });
        itemService.getLegs().subscribe(res => {
            this.legs = res;
            console.log(this.legs);
        });
        itemService.getBoots().subscribe(res => {
            this.boots = res;
            console.log(this.boots);
        });
        itemService.getNecks().subscribe(res => {
            this.necks = res;
            console.log(this.necks);
        });
        itemService.getMythirians().subscribe(res => {
            this.myths = res;
            console.log(this.myths);
        });
        itemService.getCloaks().subscribe(res => {
            this.cloaks = res;
            console.log(this.cloaks);
        });
        itemService.getJewels().subscribe(res => {
            this.jewels = res;
            console.log(this.jewels);
        });
        itemService.getBelts().subscribe(res => {
            this.belts = res;
            console.log(this.belts);
        });
        itemService.getRings().subscribe(res => {
            this.rings = res;
            console.log(this.rings);
        });
        itemService.getBracers().subscribe(res => {
            this.bracers = res;
            console.log(this.bracers);
        });
        itemService.getOneHanders().subscribe(res => {
            this.oneHands = res;
            console.log(this.oneHands);
        });
        itemService.getLeftHand().subscribe(res => {
            this.leftHands = res;
            console.log(this.leftHands);
        });
        itemService.getTwoHanders().subscribe(res => {
            this.twoHands = res;
            console.log(this.twoHands);
        });
        itemService.getRanged().subscribe(res => {
            this.ranged = res;
            console.log(this.ranged);
        });
    }
    title = 'app';

}
