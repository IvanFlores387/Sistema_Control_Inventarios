import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isOpen: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  // --- Método para Cerrar Sesión ---
  logout(): void {
    this.authService.logout();
  }
}
