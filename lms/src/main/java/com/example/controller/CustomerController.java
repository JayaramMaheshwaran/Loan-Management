package com.example.controller;
import com.example.bean.Customer;

import com.example.service.CustomerService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CustomerController {

	@Autowired
	private CustomerService custService;

	@RequestMapping("/customers")
	public List<Customer> getAllCustomers()
	{
		return custService.getAllCustomers();
	}
	@RequestMapping("/customers/{id}")
	public Optional<Customer> getcustById(@PathVariable int id)
	{
		return custService.getcustById(id);
	}
	
	@PostMapping("/customers")
	public void addCustomer(@RequestBody Customer customer)
	{
		custService.addCustomer(customer);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/customers/{id}")
	public void updateCustomer(@PathVariable int id, @RequestBody Customer customer)
	{
		custService.updateCustomer(id, customer);
	}
	@RequestMapping(method = RequestMethod.DELETE, value="/customers/{id}")
	public void DeleteCustomer(@PathVariable int id)
	{
		custService.deleteCustomer(id);
	}

}
