import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit{
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

  updateCustomer() {
    this.customerService.updateCustomer(this.customerId, this.customer).subscribe(
      (data) => {
        console.log(data);
        this.customer = new Customer();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateCustomer();
  }

  gotoList() {
    this.router.navigate(['/custlist']);
  }
}
