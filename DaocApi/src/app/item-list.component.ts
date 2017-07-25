import { Component, Input, OnChanges, NgModule } from '@angular/core';
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

    @Input() selectedSlot: number;

    bonus: Object;
    selectedBonus: Object;
    selectedChildBonus: Object;
    filteredItems: Item[];
    filters = [];

    attributes = [{ label: "Acuity", bonustypes: [10] }, { label: "Charisma", bonustypes: [7] }, { label: "Constitution", bonustypes: [2] }, { label: "Dexterity", bonustypes: [1] }, { label: "Empathy", bonustypes: [6] }, { label: "Intelligence", bonustypes: [4] }, { label: "Piety", bonustypes: [5] }, { label: "Quickness", bonustypes: [3] }, { label: "Strength", bonustypes: [0] }];
    resistances = [{ label: "Body", bonustypes: [16, 25, 26, 27] }, { label: "Cold", bonustypes: [12, 23] }, { label: "Crush", bonustypes: [1] }, { label: "Energy", bonustypes: [19, 20, 22] }, { label: "Heat", bonustypes: [10, 14] }, { label: "Matter", bonustypes: [13, 15] }, { label: "Slash", bonustypes: [2] }, { label: "Spirit", bonustypes: [11, 17, 18] }, { label: "Thrust", bonustypes: [3] }];
    toaBonus = [{ label: "Melee Damage", bonustypes: [8] }, { label: "Magic Damage", bonustypes: [9] }, { label: "Style Damage", bonustypes: [10] }, { label: "Archery Range", bonustypes: [11] }, { label: "Spell Range", bonustypes: [12] }, { label: "Spell Duration", bonustypes: [13] }, { label: "Healing Effectiveness", bonustypes: [14] },
        { label: "Stat Debuff Effectiveness", bonustypes: [15] }, { label: "Stat Buff Effectiveness", bonustypes: [16] }, { label: "Fatigue", bonustypes: [17] }, { label: "Melee Speed", bonustypes: [19] }, { label: "Archery Speed", bonustypes: [20] }, { label: "Casting Speed", bonustypes: [21] }, { label: "Armor Factor", bonustypes: [22] }];


    bonuses = [{
        label: "Attributes",
        childBonuses: this.attributes,
        bonustype: 1
    },
        { label: "Cap Increase", bonustype: 28, childBonuses: this.attributes },
        { label: "Resistances", bonustype: 5, childBonuses: this.resistances },
        { label: "ToA Bonus", bonustype: -1, childBonuses: this.toaBonus },
        { label: "Hits", bonustype: 4 },
        { label: "Mythical Bonus", bonustype: 0 },
        { label: "Procs", bonustype: 0 },
        { label: "Skill", bonustype: 2 }];

    constructor(private itemService: ItemService) {

    }
    ngOnChanges(changes: Object) {
        this.filteredItems = this.items;
    }

    onChange($event) {
        this.selectedChildBonus = {};
    }

    addFilter() {
        if (this.selectedBonus && this.selectedBonus['childBonuses'] && this.selectedChildBonus['label']) {
            var filter = {
                label: this.selectedBonus['label'] + ' ' + this.selectedChildBonus['label'],
                bonustype: this.selectedBonus['bonustype'] || this.selectedChildBonus['bonustypes'][0],
                bonustypes: this.selectedChildBonus['bonustypes']
            }
            if (this.filters.find(x=> x == filter) == null) {
                this.filters.push(filter);
            }
        }
        this.refreshFilteredItems();
    }
    removeFilter(filter: string) {
        let index = this.filters.indexOf(filter);
        if (index !== -1) {
            this.filters.splice(index, 1);
        }
        this.refreshFilteredItems();
    }
    refreshFilteredItems() {
        this.filteredItems = [];
        for (let item of this.items) {
            var add = true;
            for (let filter of this.filters) {
                var found = false;
                for (let itembonus of item.bonuses) {
                    if (itembonus.type == filter.bonustype && filter.bonustypes.some(x=> x == itembonus.id)) {
                        found = true;
                    }

                    if (filter.bonustype == -1 && itembonus.type == filter.bonustypes[0]) {
                        found = true;
                    }

                    if (filter.bonustype == itembonus.type && !filter.bonustypes) {
                        found = true;
                    }
                }
                add = add && found;
            }
            if (add) {
                this.filteredItems.push(item);
            }
        }
    }
    title = 'app';

}
