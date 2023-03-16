import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  UserRegister() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(
      (data) => {
        alert('Success');
        this.router.navigateByUrl('');
      },
      (error) => alert('Failure')
    );
  }
}
