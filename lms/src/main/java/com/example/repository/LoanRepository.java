package com.example.repository;
import org.springframework.data.repository.CrudRepository;

import com.example.bean.Loan;

public interface LoanRepository extends CrudRepository<Loan, Long> {
}
