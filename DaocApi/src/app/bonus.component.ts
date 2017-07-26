import { Component, Input, OnChanges, SimpleChange  } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';
import { Http, Response } from '@angular/http';
import { Location }                 from '@angular/common';
import 'rxjs/Rx';
@Component({
    selector: 'bonus',
    templateUrl: './bonus.component.html',
    styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnChanges {
    @Input() equipped: Item[];


    constructor(private itemService: ItemService) {
    }
    title = 'app';

    getBonus(prop: string) {
        if (this.equipped && this.equipped[0]) {
            var allBonus = this.equipped.map(function (a) { return a.mappedBonuses }).reduce(function (a, b) { return a.concat(b) });

            return allBonus.filter(x=> x.Text == prop).map((a) => { return +a.Value }).reduce(function (a, b) { return a + b }, 0);
        }
    }
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                let from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
    }

}
