import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',  using selector by atributes
  //selector: '.app-servers', using selector by class
  selector: 'app-servers',
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
