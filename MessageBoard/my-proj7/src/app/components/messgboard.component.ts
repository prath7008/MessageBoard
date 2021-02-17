import { EventListenerFocusTrapInertStrategy } from "@angular/cdk/a11y";
import { Component, Input } from "@angular/core";

@Component({

    selector: 'app-board',

    template: `
    
<div class="overlay" fxLayout="column" fxLayoutAlign="start center">

   
    <div class="rect" fxLayoutAlign="start center" fxLayout="column">
    <h2 style="font-size:2rem" >PRATH MESSAGE BOARD</h2> 

        <h1 style="font-size: 2rem; font-weight:bold">{{childData}}</h1>
   

    </div>
    <div>
    <hr>
    <app-entry  (childEvent)="childData=$event" ></app-entry> 
    </div>


</div>

`,

    styles: [`

    .overlay{
        height:100vh;
    }
    .rect{
        margin-top: 3%;
        height: 30vh;
        width: 100vh;
        background: orange;
        border: 2px solid orange;
        border-radius: 10px;
    }
   

   
 
    `]
})

export class BoardComponent {
    valid = false;


    public childData: string | undefined;

    onSave() {

        this.valid = true;


    }
}