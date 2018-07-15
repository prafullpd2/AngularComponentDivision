import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.css']
})
export class ServerManagerComponent implements OnInit {

  serverName:string;
  @Output() serverCreated = new EventEmitter<{serverDesc: string, serverName:string, isBluePrint: boolean}>()

  constructor() { }

  onAddServer(serverName:string, serverDesc:string, isBluePrint:boolean){
    console.log(serverName,serverDesc, isBluePrint);
    this.serverCreated.emit({serverName:serverName,serverDesc:serverDesc,isBluePrint:isBluePrint});
 
  }
  ngOnInit() {
  }

}
