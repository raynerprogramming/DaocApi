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
    filters = [];

    attributes = [{ label: "Acuity" }, { label: "Charisma" }, { label: "Constitution" }, { label: "Dexterity" }, { label: "Empathy" }, { label: "Intelligence" }, { label: "Piety" }, { label: "Quickness" }, { label: "Strength" }];
    resistances = [{ label: "Body" }, { label: "Cold" }, { label: "Crush" }, { label: "Energy" }, { label: "Heat" }, { label: "Matter" }, { label: "Slash" }, { label: "Spirit" }, { label: "Thrust" }];
    toaBonus = [{ label: "Melee Damage" }, { label: "Magic Damage" }, { label: "Style Damage" }, { label: "Archery Range" }, { label: "Spell Range" }, { label: "Spell Duration" }, { label: "Healing Effectiveness" },
        { label: "Stat Debuff Effectiveness" }, { label: "Fatigue" }, { label: "Melee Speed" }, { label: "Archery Speed" }, { label: "Casting Speed" }, { label: "Armor Factor" }];


    bonuses = [{
        label: "Attributes",
        childBonuses: this.attributes
    },
        { label: "Cap Increase", childBonuses: this.attributes },
        { label: "Resistances", childBonuses: this.resistances },
        { label: "ToA Bonus", childBonuses: this.toaBonus },
        { label: "Mythical Bonus" },
        { label: "Procs" },
        { label: "Skill" }];

    constructor(private itemService: ItemService) {



    }
    ngOnChanges(changes: Object) {
        console.log(this.items);
        console.log(this.category);
    }

    onChange($event) {
        this.selectedChildBonus = {};
    }

    addFilter() {
        if (this.selectedBonus && this.selectedBonus['childBonuses'] && this.selectedChildBonus['label']) {
            var filter = this.selectedBonus['label'] + ' ' + this.selectedChildBonus['label'];
            if (this.filters.find(x=> x == filter) == null) {
                this.filters.push(filter);
            }
        }
    }
    removeFilter(filter: string) {
        let index = this.filters.indexOf(filter);
        if (index !== -1) {
            this.filters.splice(index, 1);
        }  
    }
    title = 'app';

}
