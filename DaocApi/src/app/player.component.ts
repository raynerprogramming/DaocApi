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
    default: Item;
    @Input() equipped: Item[];
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();

    constructor(private itemService: ItemService) {

        this.default = {
            id: -1, name: 'None Equipped',
            category: -1,
            realm: -1,
            icon: -1,
            material: -1,
            salvage_amount: -1,
            artifact: false,
            sell_value: -1,
            flags: {
                emblemizable: false,
                dyable: false
            },
            bonuses: [],
            mappedBonus: [],
            type_data: {
                dps: -1,
                clamped_dps: -1,
                speed: -1,
                damage_type: -1,
                base_quality: -1,
                range: -1,
                two_handed: -1,
                left_handed: -1,
                armor_factor: -1,
                clamped_armor_factor: -1,
                absorption: -1,
                slot: -1
            },
            sources: [],
            requirements: -1,
            use_duration: -1,
            bonus_level: -1,
            dye_type: -1,
            delve_text: ""
        }

        console.log("Friends are being called");

        itemService.getBelts().subscribe(res => {
            this.belts = res;
        });

    }

    selected(slot: number) {
        this.selectedSlot = slot;
        this.selectedChange.emit(this.selectedSlot);
    }

    getItem(slot: number) {
        if (this.equipped && this.equipped[slot]) {
            return this.equipped[slot];

        } else {
            return this.default;
        }
    }

    title = 'app';

}
