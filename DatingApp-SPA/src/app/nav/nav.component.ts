import { RouterModule, Router } from '@angular/router';
import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {}

  public login(): void {
    this.authService.login(this.model)
      .subscribe(
        next => this.alertify.success('logged in successfully'),
        error => this.alertify.error(error),
        () => this.router.navigate(['/members']));
  }

  public loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
