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
        this.http.get('assets/AllBelts.json')
            .map(response => response.json())
            //.subscribe(result => { console.log(result); this.belts = result });
        //return this.http.get("./FileGenerator/ItemJsons/AllBelts.json").map((res: Response) => res.json());
    }
    getBelts() {
        return this.http.get('assets/AllBelts.json')
            .map(response => response.json())
            //.subscribe(result => { console.log(result); this.belts = result });
    }
    getRings() {
        return this.http.get('assets/AllRings.json')
            .map(response => response.json())
        //.subscribe(result => { console.log(result); this.belts = result });
    }
}
