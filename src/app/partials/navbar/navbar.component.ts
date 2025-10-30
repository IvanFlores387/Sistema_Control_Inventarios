import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  userName: string = '';
  notificationCount: number = 3;

   constructor()
  {}

  ngOnInit(): void {

  }

}
