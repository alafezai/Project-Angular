import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "src/app/services/local-storage.service";
import { AuthService } from "src/app/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentUser: any;
  public isLoggedIn: boolean = false;
  
  constructor(
    private localStorageService: LocalStorageService,
    public authService: AuthService,
    public router: Router
      ) {
    this.currentUser = this.localStorageService.get('user');
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.isLoggedIn = this.authService.isLoggedIn;
        if (this.isLoggedIn) {
          this.currentUser = this.localStorageService.get('user');
        }
      }
    });
  }
  
  logout() {
    this.authService.logout();
    this.ngOnInit();
  }

}
