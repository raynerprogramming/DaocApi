import { Component, Input, OnChanges } from '@angular/core';
import {Item} from './item';

@Component({
    selector: 'item-slot',
    templateUrl:'./item-slot.component.html',
    styleUrls: ['./item-slot.component.css']
})
export class ItemSlotComponent implements OnChanges {    
    @Input() item: Item;
    @Input() size: number;
    itemname: string;
    constructor() {
        console.log(this.item);
    }

    ngOnChanges(changes: Object) {
        if (changes['item']) {
            this.itemname = this.item['name'];

        }
    }
}
