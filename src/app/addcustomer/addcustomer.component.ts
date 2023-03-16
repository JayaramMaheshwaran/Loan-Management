import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router) {}

  onSubmit() {
    console.log(this.customer);
    this.customerService.registerUser(this.customer).subscribe(
      (data) => {
        alert('Success');
        this.router.navigateByUrl('home');
      },
      (error) => alert('Failure')
    );
  }
  
  ngOnInit(): void {}
}