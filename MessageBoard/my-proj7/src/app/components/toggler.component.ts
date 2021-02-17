import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component, Input } from "@angular/core";
import { ApiService } from "../services/api-service";

@Component({

    selector: 'app-toggler',

    template: `
  <div class="flex items-center" fxLayout="row" fxLayoutGap="10px" > 
<img [hidden]=state src="assets/lights-off.png"> 
<img [hidden]=!state src="assets/lights-on.png">

<button mat-flat-button (click)="onToggleState()">{{label}}</button>
  </div>
    
    `,

    styles: [`
    img,button{
        width: 15vh;
    }
    `]
})

export class ToggleComponent {
    label = 'Off';
    state = false;
    value = 'start';
    end = "close";
    reminder = "Please Enable  Again";
    dict = {};

    @Output() childEv = new EventEmitter<string>();

    constructor(private apiService: ApiService) {

    }

    onToggleState() {
        this.state = !this.state;
        this.label = this.state ? 'On' : 'Off';
        if (this.label == 'On') {

            this.dict = { store: this.value }
            const request = this.apiService.doSend(this.dict);
            request.subscribe((data) => {
                console.log(data);
                this.childEv.emit(data);
            }, (error) => {
                console.log(error);
            });
        } else {

            this.dict = { store: this.end }
            const request = this.apiService.doSend(this.dict);

            request.subscribe((data) => {
                console.log(data);
                this.childEv.emit(data);
            }, (error) => {
                console.log(error);
            });
        }



    }
    //post value start
}