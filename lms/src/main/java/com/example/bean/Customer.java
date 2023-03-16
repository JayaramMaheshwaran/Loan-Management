package com.example.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	@Id
    private int customerId;
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String contactNo;
	private String address;
	private String LoanId;
	
	public Customer() {
		
	}
	public Customer( String firstName, String lastName, String gender, String email, String contactNo,
			String address, String LoanId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.contactNo = contactNo;
		this.address = address;
		this.LoanId = LoanId;
		this.customerId = customerId;
	}
	
	public int getCustomerId() {
		return customerId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getLoanId() {
		return LoanId;
	}
	public void setLoanId(String LoanId) {
		this.LoanId = LoanId;
	}
	@Override
	public String toString() {
		return "Customer[customerId=" + customerId + ",firstName=" + firstName + ", lastName=" + lastName + ", gender="
				+ gender + ", email=" + email + ", contactNo=" + contactNo + ", address=" + address + ", LoanId="
				+ LoanId + "]";
	}
	
	
}
