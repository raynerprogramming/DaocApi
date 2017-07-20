import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Item} from './Item';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ItemService {
   // result: Item[];
    results: string[];
    constructor(public http: Http) { }

    getData() {
    	return this.http.get("assets/test.json").map((res: Response) => res.json()).subscribe(result => this.results = result.json());
        //return this.http.get("./FileGenerator/ItemJsons/AllBelts.json").map((res: Response) => res.json());
    }
}
