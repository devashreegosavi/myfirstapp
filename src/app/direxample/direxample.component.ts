import { Component } from '@angular/core';

@Component({
  selector: 'app-direxample',
  templateUrl: './direxample.component.html',
  //styleUrls: ['./direxample.component.css']
  styles : [`
        .online {
          color:white;
        }
  `]
})
export class DirexampleComponent {
  serverId :number =10;
  serverStatus : string = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServertatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
