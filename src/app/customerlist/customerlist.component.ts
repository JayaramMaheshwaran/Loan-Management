import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
Customer!: Observable<Customer[]>;
  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.Customer = this.customerService.getUser();
  }
  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
  bookingDetails(id: string) {
    console.log(id);
    this.router.navigate(['details', id]);
  }
  updateBooking(id: string) {
    console.log(id);
    this.router.navigate(['update', id]);
  }
}
