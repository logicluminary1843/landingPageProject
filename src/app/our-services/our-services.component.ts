import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  degre:any;
  degreBind:any;
  dynStyle:any
  ngOnInit(): void {
    this.degre = 0;
    setInterval(() => {
      this.degre = this.degre + 1;
      if(this.degre > 360){
        this.degre = 0
      }
      this.degreBind = `${this.degre}deg`
      this.dynStyle = `width: 155px; transform: rotate(${this.degreBind}) translateZ(0px);`
    }, 10);

  }


}
