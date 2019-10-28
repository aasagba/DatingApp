import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  public login(): void {
    this.authService.login(this.model)
      .subscribe(next => {
        console.log('logged in successfully');
      }, error => {
        console.log(error);
      });
  }

  public loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public logout(): void {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
