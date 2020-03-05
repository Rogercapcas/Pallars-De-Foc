import { Component, OnInit } from '@angular/core';
import {Edition} from '../../models/edition';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  editions: Edition[];
  selectedEdition: Edition;

  constructor() { }

  ngOnInit(): void {
  }

}
