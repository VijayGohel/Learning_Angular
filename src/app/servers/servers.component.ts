import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '.app-servers',
 // selector:'[app-servers]',
  //template: '<h1>Hello</h1>',
  templateUrl: './servers.component.html' ,
   styleUrls: ['./servers.component.css'],
 // styles: ['div { color :green;}']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
