import { Component, OnInit } from '@angular/core';
import { Help } from './../help.model';
import { Helps } from './../help';

@Component({
  selector: 'app-module-help',
  templateUrl: './module-help.component.html',
  styleUrls: ['./module-help.component.css']
})
export class ModuleHelpComponent implements OnInit {

  public Posts:Help[]=Helps;
  constructor() { }

  ngOnInit(): void {
  }

}
