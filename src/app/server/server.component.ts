import { Component, Input, OnChanges } from "@angular/core";


@Component({
    selector:"app-server",
    styleUrls:["./server.component.css"],
    templateUrl:"./server.component.html"
})
export class ServerComponent implements OnChanges{
    // @Input() private isBluePrint: boolean = false;
    // @Input() private serverName:string = "Server NAme";
    // @Input() private serverDesc: string = "Server Descript";
    @Input('serverElement') element:{serverDesc: string, serverName:string, isBluePrint: boolean};
    constructor(){
        // this.serverName = serverName;
        // this.serverDesc = serverDesc;
        // this.isBluePrint = isBluePrint;
        console.log("I Am called",this.element);
    }
    ngOnChanges(a){
        console.log("Change",this.element,a);

    }
    // constructor(serverName:string, serverDesc:string, isBluePrint?: boolean){
    //     this.serverName = serverName;
    //     this.serverDesc = serverDesc;
    //     this.isBluePrint = isBluePrint;
    //     console.log("I Am called",this.element);
    // }
    // @Input() setIsBluePrint(isBluePrint: boolean){
    //     this.isBluePrint = isBluePrint;
    // }
    // @Input() setServerName(serverName:string){
    //     this.serverName = serverName;
    // }
    // @Input() setServerDesc(serverDesc:string){
    //     this.serverDesc = serverDesc;
    // }

    // getIsBluePrint(){
    //     return this.isBluePrint ;
    // }
    // getServerName(){
    //     return this.serverName;
    // }
    // getServerDesc(){
    //     return this.serverDesc;
    // }


}