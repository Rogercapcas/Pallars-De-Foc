import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Edition} from '../../models/edition';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public edition: Edition;

  constructor(private router: Router) {
  }

  ngOnInit(): void { }

  public goTo(url) {
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log('Navigate successful!');
      } else {
        console.log('Navigate fail!');
      }
    });
  }

}
