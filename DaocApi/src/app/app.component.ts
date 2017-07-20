import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ItemService } from './item.service'
import { Item } from './item'
import {Http, Response} from '@angular/http';
 import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  template: `<h1>My Friends</h1>
    <ul>
      <li *ngFor="let item of result">
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
  result:Array<Object>; 
  constructor(http: Http) { 
    

        console.log("Friends are being called");
        http.get('assets/AllBelts.json')
                      .map(response => response.json())
                      .subscribe(result => {console.log(result);this.result =result});
                      
       }
    title = 'app';   
     
}
