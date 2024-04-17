import { Component } from '@angular/core';
// import {MatCardModule} from '@angular/material/card';
// import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  services = [
    { title: 'Service 1', description: 'Description for Service 1.' },
    { title: 'Service 2', description: 'Description for Service 2.' },
    { title: 'Service 3', description: 'Description for Service 3.' },
    { title: 'Service 4', description: 'Description for Service 4.' },
    { title: 'Service 5', description: 'Description for Service 5.' },
    { title: 'Service 6', description: 'Description for Service 6.' }
  ];

}
