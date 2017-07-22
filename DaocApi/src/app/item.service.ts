import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Item} from './Item';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ItemService {
   // result: Item[];
    belts: Array<Object>;
    constructor(public http: Http) { this.Init() }

    Init(): void {
        //return this.http.get("assets/test.json").map((res: Response) => res.json()).subscribe(result => this.results = result.json());
       // this.http.get('assets/AllBelts.json')
      //      .map(response => response.json())
            //.subscribe(result => { console.log(result); this.belts = result });
        //return this.http.get("./FileGenerator/ItemJsons/AllBelts.json").map((res: Response) => res.json());
    }
    getBelts() {
        return this.http.get('assets/AllBelts.json')
            .map(response => response.json())
    }
    getLegs() {
        return this.http.get('assets/AllLegs.json')
            .map(response => response.json())
    }
    getArms() {
        return this.http.get('assets/AllArms.json')
            .map(response => response.json())
    }
    getHelms() {
        return this.http.get('assets/AllHelms.json')
            .map(response => response.json())
    }
    getBoots() {
        return this.http.get('assets/AllBoots.json')
            .map(response => response.json())
    }
    getHands() {
        return this.http.get('assets/AllHands.json')
            .map(response => response.json())
    }
    getChests() {
        return this.http.get('assets/AllChests.json')
            .map(response => response.json())
    }
    getMythirians() {
        return this.http.get('assets/AllMythirians.json')
            .map(response => response.json())
    }
    getRings() {
        return this.http.get('assets/AllRings.json')
            .map(response => response.json())
    }
    getJewels() {
        return this.http.get('assets/AllJewels.json')
            .map(response => response.json())
    }
    getNecks() {
        return this.http.get('assets/AllNecks.json')
            .map(response => response.json())
    }
    getBracers() {
        return this.http.get('assets/AllBracers.json')
            .map(response => response.json())
    }
    getCloaks() {
        return this.http.get('assets/AllCloaks.json')
            .map(response => response.json())
    }
    getTwoHanders() {
        return this.http.get('assets/AllTwoHand.json')
            .map(response => response.json())
    }
    getOneHanders() {
        return this.http.get('assets/AllOneHand.json')
            .map(response => response.json())
    }
    getLeftHand() {
        return this.http.get('assets/AllLeftHand.json')
            .map(response => response.json())
    }
    getRanged() {
        return this.http.get('assets/AllRanged.json')
            .map(response => response.json())
    }
}
