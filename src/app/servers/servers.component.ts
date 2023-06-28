import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*template: `<app-server></app-server>
  <app-server></app-server>`,*/
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=false;
  serverCreatedStatus ='No Server Was Created';
  serverName ='Testserver';
  serverCreated=false;
  servers = ['server 1','server 2'];
  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }
   ngOnInit(){

   }
   onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated=true;
    this.serverCreatedStatus ='Server was created : Name is :' +this.serverName;

   }
}
