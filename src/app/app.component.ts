import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //serverList: ServerComponent[] = [ new ServerComponent("DemoName","demoDesc") ];
  serverList = [];
  onServerCreated(serverData:{serverName:string,serverDesc:string,isBluePrint:boolean}){
    this.serverList.push(serverData);
  }

}
