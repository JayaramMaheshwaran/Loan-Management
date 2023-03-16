package com.example.service;
import com.example.bean.Loan;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.repository.LoanRepository;


@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public List<Loan> getAllLoans() {
        return (List<Loan>) loanRepository.findAll();
    }

    public Optional<Loan> getLoanById(Long id) {
        return loanRepository.findById(id);
    }

    public void addLoan(Loan loan) {
        loanRepository.save(loan);
    }

    public void updateLoan(Long id, Loan loan) {
        Loan existingLoan = loanRepository.findById(id).orElse(null);
        if (existingLoan != null) {
            existingLoan.setLoanAmount(loan.getLoanAmount());
            existingLoan.setInterestRate(loan.getInterestRate());
            existingLoan.setLoanDuration(loan.getLoanDuration());
            loanRepository.save(existingLoan);
        }
    }

    public void deleteLoan(Long id) {
        loanRepository.deleteById(id);
    }
}
