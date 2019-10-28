import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output()
  cancelRegister: EventEmitter<boolean> = new EventEmitter();

  public model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public register(): void {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  public cancel(): void {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
