import { Component } from '@angular/core'

@Component({
  // selector: '[app-servers]',  using selector by atributes
  //selector: '.app-servers', using selector by class
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false
  serverCreattionStatus = 'No server was created'
  serverName = ''
  serverCreated = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreattionStatus = 'Server was created! Name is' + this.serverName
    this.serverCreated = true
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(event.target.value)
  }
}
