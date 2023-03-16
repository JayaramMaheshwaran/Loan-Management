package com.example.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.bean.Loan;
import com.example.repository.LoanRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoanController {

    @Autowired
    private LoanRepository loanRepository;

    @GetMapping("/loans")
    public List<Loan> getAllLoans() {
        return (List<Loan>) loanRepository.findAll();
    }

    @GetMapping("/loans/{id}")
    public Optional<Loan> getLoanById(@PathVariable Long id) {
        return loanRepository.findById(id);
    }

    @PostMapping("/loans")
    public Loan createLoan(@RequestBody Loan loan) {
        return loanRepository.save(loan);
    }

    @PutMapping("/loans/{id}")
    public Loan updateLoan(@PathVariable Long id, @RequestBody Loan loan) {
        Loan existingLoan = loanRepository.findById(id).orElse(null);
        if (existingLoan != null) {
            existingLoan.setLoanAmount(loan.getLoanAmount());
            existingLoan.setInterestRate(loan.getInterestRate());
            existingLoan.setLoanDuration(loan.getLoanDuration());
            return loanRepository.save(existingLoan);
        } else {
            return null;
        }
    }

    @DeleteMapping("/loans/{id}")
    public void deleteLoan(@PathVariable Long id) {
        loanRepository.deleteById(id);
    }
}
