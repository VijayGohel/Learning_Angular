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
    serverCreated =false;
    serverStatus = 'offline';
    constructor() {
        this.changeStatus();
        setTimeout(()=>{this.allowAdding=false},2000);
    }

    getStatus()
    {
        return this.serverStatus;
    }
    changeStatus()
    {
        this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
    }
    createServer()
    {
        
        this.serverCreated =true;
        this.showServerStatus="Server created ! Name is"+this.serverName;
    }

    getColor()
    {
        return this.serverStatus === "Online" ? "green" : "red";
    }

    onUpdateServerName(event)
    {
        this.serverName= event.target.value;

    }
}