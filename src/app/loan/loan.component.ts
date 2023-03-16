import { Component,OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../loan';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
  
})
export class LoanComponent implements OnInit {
  loans: Loan[] = [];
  selectedLoan: Loan = new Loan();
  loanFormVisible = false;
  message = '';

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans() {
    this.loanService.getLoans().subscribe(
      loans => {
        this.loans = loans;
      },
      error => {
        this.message = 'Error getting loans from server: ' + error;
      }
    );
  }

  onSelect(loan: Loan) {
    this.selectedLoan = loan;
    this.loanFormVisible = true;
  }

  addLoan() {
    this.loanService.addLoan(this.selectedLoan).subscribe(
      loan => {
        this.loans.push(loan);
        this.message = 'Loan added successfully!';
      },
      error => {
        this.message = 'Error adding loan: ' + error;
      }
    );
  }

  updateLoan() {
    this.loanService.updateLoan(this.selectedLoan.id, this.selectedLoan).subscribe(
      () => {
        this.message = 'Loan updated successfully!';
      },
      error => {
        this.message = 'Error updating loan: ' + error;
      }
    );
  }

  deleteLoan(id: number) {
    this.loanService.deleteLoan(id).subscribe(
      () => {
        this.loans = this.loans.filter(loan => loan.id !== id);
          this.message = 'Loan deleted successfully!';
      },
      error => {
        this.message = 'Error deleting loan: ' + error;
      }
    );
  }

}