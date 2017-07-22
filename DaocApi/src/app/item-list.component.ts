import { Component, Input, OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';
import { Http, Response } from '@angular/http';
import { Location }                 from '@angular/common';
import 'rxjs/Rx';
@Component({
    selector: 'item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnChanges {
    @Input() items: Item[];
    @Input() current: Item;
    @Input() category: string;
    
    constructor(private itemService: ItemService) {

      

    }
    ngOnChanges(changes: Object) {
        console.log(this.items);
        console.log(this.category);
    }
    title = 'app';

}
