import { EventEmitter } from "@angular/core";
import { Component, Input, Output } from "@angular/core";
import { ApiService } from "../services/api-service";


@Component({

    selector: 'app-entry',

    template: `
  
    
    <h1 style="font-size:2.2rem">Message Entry Box:</h1> 
    <hr> 
    <div   fxLayout="row" fxLayoutGap="10px">
  
    <input type="text"  #ctext  placeholder="Enter Message Here"/>
   
     <button  type="button" mat-raised-button (click)="fetchdata(ctext.value)" mat-raised-button style="width:15vh">Send</button>

    </div >
    <div class="tog" >
    <h1 style="color:red">TAP TO ENABLE :</h1>   


     <app-toggler   (childEv)="childDData=$event"></app-toggler>

     <div *ngIf=load >
        <h2>Created AT: {{this.Created_at}}</h2>
        <h2>UPDATED AT: {{this.Updated_at}}</h2>
    </div>
   </div>
    `,

    styles: [`
   
    input{
        margin:10px 0px;
        height:15vh;
        width:70vh;
        border-radius: 10px;
        font-size: 2rem;
    }

    .tog{
        height: 30vh;
        width:40vh;
        
        position: relative;
        right:60vh;
        bottom: 50vh;
    }

    button{
        border-radius:10px; 
        margin:10px 0px;
    }
    `]
})

export class EntryComponent {

    public childDData: string | undefined;
    valid = false;
    onOff = false;
    load = false;
    count = 0;
    content: any;
    Created_at: any;
    Updated_at: any;

    @Output() childEvent = new EventEmitter<string>();
    constructor(private apiService: ApiService) {

    }
    ngOnInit() {

    }
    fetchdata(value: string) {
        this.apiService.getAllPost().subscribe(data => {

            // this.count = data.length;
            // console.log("prath");
            console.log(data);
            // console.log(data[data.length - 1].store)

            if (data[data.length - 1].store == "start") {
                this.childEvent.emit(value);
                this.load = true;
                this.Created_at = data[data.length - 1].created_at;
                this.Updated_at = data[data.length - 1].updated_at;
            }
            else {
                this.content = "Kindly Enable To Start Again";
                this.childEvent.emit(this.content);
            }
        })
    }


}