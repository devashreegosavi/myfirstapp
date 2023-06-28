import { Component } from '@angular/core';

@Component({
  selector: 'app-direxampletwo',
  templateUrl: './direxampletwo.component.html',
  //styleUrls: ['./direxampletwo.component.css']
  styles : [`
        .white-text {
          color:white;
        }
  `]
})
export class DirexampletwoComponent {
    showSecret = false;
    log: any[] = [];

    onToggleDisplay(){
      this.showSecret=!this.showSecret;
      //this.log.push(this.log.length + 1);
      this.log.push(new Date());
    }
}
