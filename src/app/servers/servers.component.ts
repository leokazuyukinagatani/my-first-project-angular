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
  serverCreationStatus = 'No server was created'
  serverName = ''
  serverCreated = false
  servers = ['Server 1', 'Server 2', 'Server 3']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName
    this.servers.push(this.serverName)
    this.serverCreated = true
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(event.target.value)
  }
}
