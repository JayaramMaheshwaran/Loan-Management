package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.bean.User;

public interface UserRepository extends JpaRepository<User, String> {

	

	User findByUserId(String userId);

}
