import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  constructor(
    private loginuserservice: LoginuserService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  UserLogin() {
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(
      (data) => {
        alert('login Succesfull');
        this.router.navigateByUrl('home');
      },
      (error) => alert('Sorry enter correct')
    );
  }
}
