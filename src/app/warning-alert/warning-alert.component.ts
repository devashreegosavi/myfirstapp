import { Component } from '@angular/core';

@Component({
  //selector: 'app-warning-alert',
  selector: '.app-warning-alert',
  templateUrl: './warning-alert.component.html',
  //styleUrls: ['./warning-alert.component.css']
  styles :[`p{ background-color: rgb(219, 154, 154);
    padding:20px;
    border:1px solid red;
  }
  `]
})
export class WarningAlertComponent {

}
