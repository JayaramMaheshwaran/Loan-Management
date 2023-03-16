import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
customerId!: string;
  customer!: Customer;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customer = new Customer();

    this.customerId = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.customerId).subscribe(
      (data) => {
        console.log(data);
        this.customer = data;
      },
      (error) => console.log(error)
    );
  }
  list() {
    this.router.navigate(['custlist']);
  }
}