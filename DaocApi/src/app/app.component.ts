import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service'
import { Item } from './item'
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Component({
    selector: 'app-root',
    template: `<h1>My Friends</h1>
    <ul>Belts
      <li *ngFor="let item of belts">
          {{item.name}}
          <ul>
            <li *ngFor="let bonus of item.mappedBonuses">
            <span *ngIf="bonus!=null">{{bonus.Text}}: {{bonus.Value}}</span>
            </li>
          </ul>
      </li>
    </ul>
<ul>Rings
      <li *ngFor="let item of rings">
          {{item.name}}
          <ul>
            <li *ngFor="let bonus of item.mappedBonuses">
            <span *ngIf="bonus!=null">{{bonus.Text}}: {{bonus.Value}}</span>
            </li>
          </ul>
      </li>
    </ul>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    belts: Array<Object>;
    rings: Array<Object>;
    constructor(private itemService: ItemService) {

        console.log("Friends are being called");
        itemService.getBelts().subscribe(res => {
            this.belts = res;
            console.log(this.belts);
        });
        itemService.getRings().subscribe(res => {
            this.rings = res;
            console.log(this.rings);
        });



    }
    title = 'app';

}
