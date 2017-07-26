import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';
import { Http, Response } from '@angular/http';
import { Location }                 from '@angular/common';
import { Realm } from './Realm';
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
    realms: Realm[];
    realm: Realm;
    @Input() equipped: Item[];
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();
    @Output() realmChange: EventEmitter<any> = new EventEmitter();

    constructor(private itemService: ItemService) {
        this.realms = [{
            name: "Albion",
            id: 0
        }, {
                name: "Midgard",
                id: 1
            }, {
                name: "Hibernia",
                id: 2
            }]

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
            mappedBonuses: [],
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
            delve_text: "",
            toa_utility: -1,
            utility: -1
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

    selectedRealm(realm: Realm) {
        this.realm = realm;
        this.realmChange.emit(this.realm);
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
