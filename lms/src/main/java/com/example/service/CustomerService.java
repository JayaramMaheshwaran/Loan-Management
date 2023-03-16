package com.example.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Customer;
import com.example.repository.CustomerRepository;

@Service

public class CustomerService {

	@Autowired
	public CustomerRepository custRepo;
    
	public List<Customer> getAllCustomers()
	{
		List<Customer> customer = new ArrayList<>();
		custRepo.findAll().forEach(customer::add);
		return customer;
	}
	public Optional<Customer> getcustById(int id)
	{
		return custRepo.findById(id);
		
	}
	public void addCustomer(Customer customer) {
		custRepo.save(customer);
		
	}

	public void updateCustomer(int id, Customer customer) {
		custRepo.save(customer);
		
	}

	public void deleteCustomer(int id) {
		custRepo.deleteById(id);
		
	}
}
