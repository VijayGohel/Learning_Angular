import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number =10;
    allowAdding=true;
    showServerStatus="Server is not created."
    serverName ='TestServer';
    constructor() {
        setTimeout(()=>{this.allowAdding=false},2000);
    }

    getStatus()
    {
        return 'offline';
    }

    createServer()
    {
        this.showServerStatus="Server created !";
    }

    onUpdateServerName(event)
    {
        this.serverName= event.target.value;

    }
}