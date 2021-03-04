import { Component } from "@angular/core";

@Component
({
    selector : 'warning-alert',
    template : ' <p>Warning</p>',
    styles: [
        `
         p{
             border: 2px solid red;
             background-color: yellow;
             padding:20px;
             text-align :center;
         }
        `
    ]
})

export class WarningAlertsComponent
{

}